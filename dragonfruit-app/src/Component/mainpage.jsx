import React, {Component} from 'react';
import {BrowserRouter as Router, Routes, Route, useNavigate, useParam, Link} from 'react-router-dom';
import FooterComponent from './footer';
import HeaderComponent from './header';
import HomePageComponent  from './homepage';
import SearchResultComponent from './SearchResultComponent';
import CartComponent from './cart';
import LoginComponent from './loginpage';
import RegisterComponent from './register';


class MainPageComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isUserLoggedIn: false,
            localConnect: true,
            itemsInCart: [],
            users: new Map(),
        }
        this.updateLoginStatus = this.updateLoginStatus.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.deleteFromCart = this.deleteFromCart.bind(this);
        this.clearCart = this.clearCart.bind(this);
    }

    render() {
        return (
            <div className="MainPage">
                <Router>
                    <HeaderComponent isUserLoggedIn={this.state.isUserLoggedIn} updateLoginStatus={this.updateLoginStatus} /> 
                    <Routes>
                        <Route path="/"                 element={<HomePageComponent />} />
                        <Route path="/login"            element={<LoginComponent updateLoginStatus={this.updateLoginStatus} />} />
                        <Route path="/register"         element={<RegisterComponent />} />
                        <Route path="/home"             element={<HomePageComponent />} />
                        <Route path="/yourCart"         element={<CartComponent items={this.state.itemsInCart} clearCart={this.clearCart}/> } />
                        <Route path="/search/:keyword"  element={<SearchResultComponent addToCart={this.addToCart} />} />
                    </Routes>
                </Router>
                <FooterComponent />
            </div>
        );
    }

    updateLoginStatus(curStatus) {
        console.log("this user is logged in");
        this.setState({isUserLoggedIn: curStatus});
    }

    addToCart(item) {
        let newItems = this.state.itemsInCart;
        newItems.push(item);
        this.setState({
            itemsInCart: newItems
        });
        console.log(this.state.itemsInCart);
    }

    deleteFromCart(item) {
        let Items = this.state.itemsInCart;
        const newItems = Items.filter(it => it != item);
        this.setState({
            itemsInCart: newItems
        });
        console.log(this.state.itemsInCart);
    }

    clearCart() {
        this.setState({
            itemsInCart: {}
        });
    }
}

export default MainPageComponent;

