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
      <form>
        <div className="field">
          <label className="label">Username</label>
          <div className="control has-icons-left">
              <input className="input is-in-danger" type="username" onChange={(event) => this.handleChange('username', event)} />
              <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
              </span>
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control">
              <input className="input" type="password" onChange={(event) => this.handleChange('password', event)} />
          </div>
        </div> 
        <div class="field is-grouped is-grouped-centered">
          <div class="control">
            <button className="button is-link is-primary" onClick={this.handleLogin}>Login</button>
          </div>
          <div className="control">
            <Link to="/register"><button className="button is-light">Register</button></Link>
          </div>
        </div>
      </form>
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