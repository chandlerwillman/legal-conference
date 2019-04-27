import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { clearFields } from '../../redux/reducers/event_reducer'

import CreateEventBasic from './CreateEvent1-Basic';
import CreateEventPricing from './CreateEvent2-Pricing';
import CreateEventDetails from './CreateEvent3-Details';

class Wizard extends Component {
    
    render() {
        return (
            <div className="createEvent">              
                <nav className="navbar" role="navigation" aria-label="create event navigation">
                    <Link to="/new-event/basic">
                        <div id="navbarBasicExample" className="navbar-menu">
                            <div className="navbar-start">
                                <div className="navbar-item">
                                    Basic
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/new-event/pricing">
                        <div id="navbarBasicExample" className="navbar-menu">
                            <div className="navbar-start">
                                <div className="navbar-item">
                                    Pricing
                                </div>
                            </div>
                        </div>
                    </Link>    
                    <Link to="/new-event/details">
                        <div id="navbarBasicExample" className="navbar-menu">
                            <div className="navbar-start">
                                <div className="navbar-item">
                                    Details
                                </div>
                            </div>
                        </div>
                    </Link>    
                </nav>
                
                <Switch>
                    <Route path="/new-event/basic" component={CreateEventBasic} />
                    <Route path="/new-event/pricing" component={CreateEventPricing} />
                    <Route path="/new-event/details" component={CreateEventDetails} />
                </Switch>

                <Link to={'/'}>
                    <button className="button is-light" onClick={(e) => {this.props.clearFields()}}>Cancel</button>
                </Link>

            </div>
        );
    }
}

export default connect(null,{ clearFields })(Wizard);