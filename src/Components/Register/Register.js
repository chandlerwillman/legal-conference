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
      <div className="App">
        <input type="text" placeholder="First Name" onChange={(event) => this.handleChange('firstName', event)} />
        <input type="text" placeholder="Last Name" onChange={(event) => this.handleChange('lastName', event)} />
        <input type="text" placeholder="Company" onChange={(event) => this.handleChange('company', event)} />
        <input type="email" placeholder="Email" onChange={(event) => this.handleChange('email', event)} />
        <input type="password" placeholder="Password" onChange={(event) => this.handleChange('password', event)} />
        <input type="password" placeholder="Confirm Password" onChange={(event) => this.handleChange('confirmPassword', event)} />
        <button onClick={this.handleLogin}>Register</button>
        <Link to="/Login">Login</Link>
      </div>
    );
  }
}

export default connect(state => state, { login })(Register);