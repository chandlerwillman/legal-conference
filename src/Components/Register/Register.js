//packages
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//redux
import { connect } from 'react-redux';
import { login } from '../../redux/reducers/user_reducer';

//components

//extend component
class Register extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      company: '',
    //   phone
      email: '',
      confirmPassword: '',
    }
  }

  handleChange = (key, event) => {
      this.setState({
          [key]: event.target.value
      });
  };

  handleLogin = () => {
      axios.post('/auth/register', this.state)
        .then(response => {
            const user = response.data;
            this.props.login(user);
        })
  }

  render() {
    return (
        <form>
            <div className="field">
                <label className="label">First Name</label>
                <div className="control">
                    <input className="input" type="text" onChange={(event) => this.handleChange('firstName', event)} />
                </div>
            </div>
            <div className="field">
                <label className="label">Last Name</label>
                <div className="control">
                    <input className="input" type="text" onChange={(event) => this.handleChange('lastName', event)} />
                </div>
            </div>
            <div className="field">
                <label className="label">Company</label>
                <div className="control">
                    <input className="input" type="text" onChange={(event) => this.handleChange('company', event)} />
                </div>
            </div>
            <div className="field">
                <label className="label">Email</label>
                <div className="control">
                    <input className="input is-in-danger" type="email" onChange={(event) => this.handleChange('email', event)} />
                    {/* <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                        <i className="fas fa-exclamation-triangle"></i>
                    </span> */}
                </div>
                {/* <p class="help is-danger">This email is invalid</p> */}
            </div>
            <div className="field">
                <label className="label">Password</label>
                <div className="control">
                    <input className="input" type="password" onChange={(event) => this.handleChange('password', event)} />
                </div>
            </div>
            <div className="field">
                <label className="label">Confirm Password</label>
                <div className="control">
                    <input className="input" type="password" onChange={(event) => this.handleChange('confirmPassword', event)} />
                </div>
            </div>
            <div class="field is-grouped is-grouped-centered">
                <div class="control">
                    <button className="button is-link is-primary" onClick={this.handleLogin}>Register</button>
                </div>
                <div className="control">
                    <Link to="/Login"><button className="button is-light">Cancel</button></Link>
                </div>
            </div>
        </form>
    );
  }
}

export default connect(state => state, { login })(Register);