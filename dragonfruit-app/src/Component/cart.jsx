import React, {Component} from 'react';
import MiniCardComponent from './mini-card';
import { useNavigate } from 'react-router-dom';


function CartComponent(props) {

    return (
        <div className="CartComponent">
            {
                props.items.length > 0 && 
                <div>
                    <h3>Items in your Cart:</h3>
                    <div className="container">
                        <div className="card-columns">
                        {
                        props.items.map(item => <MiniCardComponent item={item} deleteFromCart={props.deleteFromCart}/>)
                        }
                        </div>
                    </div>
                    <CheckOutComponent items={props.items} clearCart={props.clearCart}/>
                </div>
            }
            {
                props.items.length == 0 &&
                <h3> Your Cart is Empty. Please search <a href="/home">here</a> for more items.</h3>
            }
        </div>
    )
}

function CheckOutComponent(props) {

    let navigate = useNavigate();

    function checkout() {
        props.clearCart();
        navigate('/home');
    }

    return (
        <button className="btn btn-info" onClick={checkout}>Checkout</button>
    );
}

export default CartComponent;