import React, {Component} from 'react';
import AuthenticationService from './AuthenticationService.js';
import {useNavigate} from 'react-router-dom';

class RegisterComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: 'username',
            password: '',
            registerSuccess: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.register = this.register.bind(this);
    }

    render() {
        return (
            <div className="Register">
                <h1>Register</h1>
                <div className="container">
                    User Name: <input type="text" name="username" onChange={this.handleChange}/>
                    Password: <input type="password" name="password" onChange={this.handleChange} />
                    <button onClick={this.register}>register</button>
                    {this.state.registerSuccess && <div> Register Successfully</div>}
                </div>
            </div>
        );
    }

    handleChange(event) {
        this.setState({[event.target.name]:event.target.value});
    }

    register() {
        console.log("register");
        AuthenticationService.register(this.state.username, this.state.password);
        this.setState(
            {
                registerSuccess: true,
            }
        );
    }
}

export default RegisterComponent;