import React, {Component} from 'react';
import './card.css';

class CardComponent extends Component {

    render() {
        return (
            <div className="card">
                <img className="card-img-top" src={this.props.item.img} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{this.props.item.title}</h5>
                    <p className="card-text">{this.props.item.description}</p>
                    <p className="card-text">{this.props.item.price}</p>
                    <AddToCart item={this.props.item} addToCart={this.props.addToCart} />
                </div>
            </div>
        );
    }
}

function AddToCart(props) {

    function add() {
        props.addToCart(props.item);
    }

    return (
    <button className="btn btn-info" onClick={add}>Add to Cart</button>
    );
}

export default CardComponent;