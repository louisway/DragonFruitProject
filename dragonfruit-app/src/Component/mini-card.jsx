import React, {Component} from 'react';
import './mini-card.css';

class MiniCardComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card">
                <img className="card-img-top" src={this.props.item.img} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{this.props.item.title}</h5>
                    <p className="card-text">{this.props.item.price}</p>
                    <DeleteFromCart item={this.props.item} deleteFromCart={this.props.deleteFromCart} />
                </div>
            </div>
        );
    }
}

function DeleteFromCart(props) {

    function deleteFromCart() {
        props.deleteFromCart(props.item);
    }

    return (
        <button className="btn btn-info" onClick={deleteFromCart}>Delete From Cart</button>
    );
}

export default MiniCardComponent;