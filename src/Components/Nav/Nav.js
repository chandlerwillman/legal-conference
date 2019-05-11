import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <div className="navbar-item">
                    <img src="https://www.filevine.com/wp-content/themes/filevinewp/img/logo-color.svg" alt="Filevine Test Logo" width="112" height="28" />
                </div>
            
                {/* <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a> */}
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link to="/dashboard">
                        <div className="navbar-item">
                            My Events
                        </div>
                    </Link>
                </div>
            </div>

            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons" id="create-event-button">
                        <Link to="/new-event/basic">
                            <div className="button is-primary">
                                Create New Event
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="navbar-item">
                    Profile
                </div>
            </div>
        </nav>
    );
}