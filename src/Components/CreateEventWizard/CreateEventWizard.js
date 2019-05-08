import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { clearFields } from '../../redux/reducers/event_reducer'

import CreateEventBasic from './CreateEvent1-Basic';
import CreateEventPricing from './CreateEvent2-Pricing';
import CreateEventDetails from './CreateEvent3-Details';
import './CreateEventWizard.css';

class Wizard extends Component {
    
    render() {
        return (
            <div className="modal" id="create-event-modal">
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <Link to="/new-event/basic"><p className="modal-card-title">Basic</p></Link>
                        <Link to="/new-event/pricing"><p className="modal-card-title">Pricing</p></Link>
                        <Link to="/new-event/details"><p className="modal-card-title">Details</p></Link>
                        <button className="delete" aria-label="close"></button>
                    </header>
                    <section>
                        <Switch>
                            <Route path="/new-event/basic" component={CreateEventBasic} />
                            <Route path="/new-event/pricing" component={CreateEventPricing} />
                            <Route path="/new-event/details" component={CreateEventDetails} />
                        </Switch>
                    </section>
                    <footer className="modal-card-foot">
                        <button className="button is-success">Save changes</button>
                        <Link to={'/'}>
                            <button className="button is-light" onClick={(e) => {this.props.clearFields()}}>Cancel</button>
                        </Link>
                    </footer>
                </div>
            </div>
        );
    }
}

export default connect(null,{ clearFields })(Wizard);