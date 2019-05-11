import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { updateField } from '../../redux/reducers/event_reducer';
import axios from 'axios';


class CreateEventPricing extends Component {

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
                    <label className="label">Ticket Price</label>
                    <div className="control">
                        <input 
                            className="input" 
                            type="text" 
                            onChange={(e) => this.props.updateField('ticket_price', e.target.value)} />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Ticket Name</label>
                    <div className="control">
                        <input 
                            className="input" 
                            type="url" 
                            onChange={(e) => this.props.updateField('ticket_name', e.target.value)} />
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { ticket_price, ticket_name } = state.event;

    return {
        ticket_price,
        ticket_name
    }
}

export default connect(mapStateToProps, { updateField })(CreateEventPricing);