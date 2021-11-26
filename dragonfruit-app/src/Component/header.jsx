import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AuthenticationService from './AuthenticationService.js';

class HeaderComponent extends Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-light bg-light">
                    <div><a href="/" className="navbar-brand text-primary">DragonFruit</a></div>
                    
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li><Link className="nav-link" to="/yourCart" >Cart</Link></li>
                        { !this.props.isUserLoggedIn && <li><Link className="nav-link" to="/login" >Login</Link></li> }
                        { !this.props.isUserLoggedIn && <li><Link className="nav-link" to="/register" >Register</Link></li> }
                        { this.props.isUserLoggedIn && <li><Link className="nav-link" to="/home" onClick={this.logout} >Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        );
    }

    logout() {
        AuthenticationService.logout();
        this.props.updateLoginStatu(false);
    }

}

export default HeaderComponent;