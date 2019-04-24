//packages
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//redux
import { connect } from 'react-redux';
import { login } from '../../redux/reducers/user_reducer';

//components

//extend component
class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    }
  }

  handleChange = (key, event) => {
      this.setState({
          [key]: event.target.value
      });
  };

  handleLogin = () => {
      const { username, password } = this.state;

      const userCredentials = {
          username,
          password
      }

      axios.post('/auth/login', userCredentials)
        .then(response => {
            const user = response.data;
            this.props.login(user);
        })
  }

  render() {
    return (
      <div className="App">
        <input type="text" placeholder="username" onChange={(event) => this.handleChange('username', event)} />
        <input type="text" placeholder="password" onChange={(event) => this.handleChange('password', event)} />
        <button onClick={this.handleLogin}>Login</button>
        <Link to="/register">Register</Link>
      </div>
    );
  }
}

function mapStateToProps(state){
    return {
        username: state.username,
        password: state.password
    }
};

export default connect(mapStateToProps, {login})(Login);