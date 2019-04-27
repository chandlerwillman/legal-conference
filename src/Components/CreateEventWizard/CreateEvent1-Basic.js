import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { updateField } from '../../redux/reducers/event_reducer';

class CreateEventBasic extends Component {
    render() {
        return (
            <form>
                <div className="file has-name is-boxed">
                    <label className="file-label">
                        <input className="file-input" type="file" name="img" />
                        <span className="file-cta">
                        <span className="file-icon">
                            <FontAwesomeIcon icon="image" />
                        </span>
                        <span className="file-label">
                            Choose an image
                        </span>
                        </span>
                        <span className="file-name">
                        {this.props.img}
                        </span>
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
    return {
        title: state.title,
        website_url: state.website_url,
        img: state.img,
        description: state.description
    }
}

export default connect(mapStateToProps, { updateField })(CreateEventBasic);