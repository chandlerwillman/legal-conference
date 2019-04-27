import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { updateFields } from '../../redux/reducers/event_reducer';

class CreateEventBasic extends Component {
    render() {
        return (
            <form>
                <div className="file has-name is-boxed">
                    <label className="file-label">
                        <input className="file-input" type="file" name="img" />
                        <span className="file-cta">
                        <span className="file-icon">
                            <FontAwesomeIcon icon="upload" />
                        </span>
                        <span className="file-label">
                            Choose an image
                        </span>
                        </span>
                        <span className="file-name">
                        Screen Shot 2017-07-29 at 15.54.25.png
                        </span>
                    </label>
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

export default connect(mapStateToProps, { updateFields })(CreateEventBasic);