import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { updateField } from '../../redux/reducers/event_reducer';
import axios from 'axios';


class CreateEventDetails extends Component {

    getEvents = () => {
        axios.get('/api/events')
            .then(response => {
                this.setState({
                    events: response.data,
                });
            });
    };
    
    render() {
        //return jsx
        return (
            <div>
                <div className="field">
                    <label className="label">CLE Credits</label>
                    <div className="control">
                        <input 
                            className="input" 
                            type="text" 
                            onChange={(e) => this.props.updateField('cle_credits', e.target.value)} />
                    </div>
                </div>
                <div className="field">
                    <label className="label">States Available</label>
                    <div className="control">
                        <input 
                            className="input" 
                            type="url" 
                            onChange={(e) => this.props.updateField('credit_states', e.target.value)} />
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { cle_credits, credit_states } = state.event;

    return {
        cle_credits,
        credit_states
    }
}

export default connect(mapStateToProps, { updateField })(CreateEventDetails);