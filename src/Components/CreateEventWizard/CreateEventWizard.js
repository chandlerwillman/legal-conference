import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { clearFields } from '../../redux/reducers/event_reducer'

import CreateEventBasic from './CreateEvent1-Basic';
// import Step2 from './Step2';
// import Step3 from './Step3';

class Wizard extends Component {
    
    render() {
        return (
            <div className="createEvent">
                <Switch>
                    <Route path="/new-event/basic" component={CreateEventBasic} />
                    {/* <Route path="/wizard/step2" component={Step2} />
                    <Route path="/wizard/step3" component={Step3} /> */}
                </Switch>

                <Link to={'/'}>
                    <button className="button is-light" onClick={(e) => {this.props.clearFields()}}>Cancel</button>
                </Link>

            </div>
        );
    }
}

export default connect(null,{ clearFields })(Wizard);