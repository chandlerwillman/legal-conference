import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { updateField } from '../../redux/reducers/event_reducer';

class CreateEventBasic extends Component {
    
    imageRender(event) {
        if(!event.target.files || !event.target.files.length) return;
        
        event.persist();

        let image = event.target.files[0];
        var reader = new FileReader();

        reader.onload = (e) => {
            this.props.updateField('img', e.target.result);
            this.props.updateField('imgName', event.target.value.slice(event.target.value.lastIndexOf('\\') + 1))
        };

        reader.readAsDataURL(image);

        //look into Amazon S3, or Digital Ocean
    }
    
    render() {

        let imageInput;

        if(this.props.img) {
            imageInput = (
                <span className="file-cta">
                    <img src={this.props.img} alt={this.props.imgName}/>
                </span>
            );
        } else {
            imageInput = (
                <span className="file-cta">
                    <span className="file-icon">
                        <FontAwesomeIcon icon="image" />
                    </span>
                    <span className="file-label">
                        Choose an image
                    </span>
                </span>
            );
        }

        return (
            <form>
                <div className="file has-name is-boxed">
                    <label className="file-label">
                        <input className="file-input" type="file" name="img" onChange={(e) => this.imageRender(e)}/>
                        {imageInput}
                    </label>
                </div>
                <div className="field">
                    <label className="label">Event Title</label>
                    <div className="control">
                        <input 
                            className="input" 
                            type="text" 
                            onChange={(e) => this.props.updateField('title', e.target.value)} />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Website URL</label>
                    <div className="control">
                        <input 
                            className="input" 
                            type="url" 
                            onChange={(e) => this.props.updateField('website_url', e.target.value)} />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Description</label>
                    <div className="control">
                        <input 
                            className="textarea" 
                            type="text"
                            onChange={(e) => this.props.updateField('description', e.target.value)} />
                    </div>
                </div>

            </form>
        );
    }
}

function mapStateToProps(state) {
    const { title, website_url, img, imgName, description } = state.event;

    return {
        title,
        website_url,
        img,
        imgName,
        description
    }
}

export default connect(mapStateToProps, { updateField })(CreateEventBasic);