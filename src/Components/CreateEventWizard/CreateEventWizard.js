import React, { Component } from 'react';
import { Link, Route, Switch, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { clearFields } from '../../redux/reducers/event_reducer'

import CreateEventBasic from './CreateEvent1-Basic';
import CreateEventPricing from './CreateEvent2-Pricing';
import CreateEventDetails from './CreateEvent3-Details';
import './CreateEventWizard.css';

class Wizard extends Component {
    
    render() {
        return (
            <form className="card">
                <header className="card-header tabs">
                    <ul>
                        <li><NavLink to="/new-event/basic" activeClassName="is-active"><p className="card-header-title">Basic</p></NavLink></li>
                        <li><NavLink to="/new-event/pricing" activeClassName="is-active"><p className="card-header-title">Pricing</p></NavLink></li>
                        <li><NavLink to="/new-event/details" activeClassName="is-active"><p className="card-header-title">Details</p></NavLink></li>
                    </ul>
                </header>
                <div className="card-content">
                    <div className="content">
                        <Switch>
                            <Route path="/new-event/basic" component={CreateEventBasic} />
                            <Route path="/new-event/pricing" component={CreateEventPricing} />
                            <Route path="/new-event/details" component={CreateEventDetails} />
                        </Switch>
                    </div>
                </div>
                <footer className="is-grouped is-grouped-centered">
                    <button className="button is-success">Save changes</button>
                    <Link to={'/'}><button className="button is-light" onClick={(e) => {this.props.clearFields()}}>Cancel</button></Link>
                </footer>
            </form>
        );
    }
}

export default connect(null,{ clearFields })(Wizard);