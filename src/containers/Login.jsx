import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { login } from '../reducers/actions';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            password: '',
            username: '',
            isLogged: false
        }

        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    onChangeUsername(event) {
        const username = event.target.value

        this.setState(prevState => ({username: username }));
    }

   onChangePassword(event) {
       const password = event.target.value;

        this.setState(prevState => ({password: password }));
    }

    handleSubmit(event) {
        event.preventDefault();
        const { username, password } = this.state;
        login(username, password);
    }

    render() {
        const { users } = this.props.state;

        return (
           <div>
               <h1>LOGIN</h1>
               <form onSubmit={this.handleSubmit}>
                   <input type="text" value={this.state.username} onChange={this.onChangeUsername} />
                   <input type="password" value={this.state.password}  onChange={this.onChangePassword}  />
                   <button type="submit">Login</button>
               </form>
           </div>
        );
    }
}

const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps, { login })(Login);