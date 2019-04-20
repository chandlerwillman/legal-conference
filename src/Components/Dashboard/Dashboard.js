import React, { Component } from 'react';
import axios from 'axios';

import Event from '../Event/Event';

class Dashboard extends Component {
    //constructor
    constructor() {
        super();

        this.state = {
            events: []
        }
    }

    //lifecycle methods
    componentDidMount() {
        this.getEvents();
    }

    //methods
    getEvents = () => {
        axios.get('/api/events')
            .then(response => {
                this.setState({
                    events: response.data,
                });
            });
    };

    deleteEvent = (id) => {
        axios.delete(`/api/events/${id}`)
            .then(response => {
                this.getEvents();
            });
    };

    mapEvents = () => {
        return this.state.events.map((event, index) => {
            return (
                <Event 
                    event={event}
                    key={index}
                    deleteEvent={this.deleteEvent}
                />
            )
        });
    };

    //render
    render() {
        return(
            <div>
                {this.mapEvents()}
            </div>
        )
    }
}

export default Dashboard;