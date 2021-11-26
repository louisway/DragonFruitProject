import React, {Component} from 'react';
import AuthenticationService from './AuthenticationService.js';
import {useNavigate} from 'react-router-dom';


class LoginComponent extends Component{

    constructor(props) {
        super(props);
        this.state = {
            username: 'username',
            password: '',
            LoginSuccessful: null,
            LoginFailed: null,
        }
        this.handleChange = this.handleChange.bind(this);
        this.updateState  = this.updateState.bind(this);
    }


    render() {
        return (
            <div className="Login">
                <h1>Login</h1>
                <div className="container">
                    User Name: <input type="text" name="username" onChange={this.handleChange}/>
                    Password: <input type="password" name="password" onChange={this.handleChange} />
                    <LoginButton updateState={this.updateState} updateLoginStatus={this.props.updateLoginStatus} state={this.state} />
                    {this.state.LoginSuccessful &&  <div>Login Successful</div>} 
                    {this.state.LoginFailed && <div>Login Failed</div>}
                </div>
            </div>
        );
    }

    handleChange(event) {
        this.setState({[event.target.name]:event.target.value});
    }

    updateState(newState) {
        this.setState(
            newState
        );
    }


}

function LoginButton(props) {

    let navigate = useNavigate();
    function click() {
        AuthenticationService.login(props.state.username, props.state.password);
        if(AuthenticationService.isUserLoggedin(props.state.username)) {
            props.updateState({
                LoginSuccessful:true,
                LoginFailed: false,
            }); 
            props.updateLoginStatus(true);
            navigate('/home'); 
        }else {
            props.updateState({
                LoginSuccessful:false,
                LoginFailed: true,
            });
        }
    }

    return <div className="LoginButton">
        <button className="btn btn-success" onClick={click}>login</button>
    </div> ;
}
export default LoginComponent;