import React, {Component} from 'react';
import {useParams} from 'react-router-dom';
import CardComponent from './card';


function SearchResultComponent(props){

    let {keyword} = useParams();
    const items = [
        {
            id: "1",
            zipcode: "940341", 
            img: "https://thumbs.dreamstime.com/b/dragon-fruit-25542562.jpg",
            title: "Dragon Fruit",
            description: "Dragon fruit is high in vitamin C and other antioxidants, which are good for your immune system. It can boost your iron levels.",
            price: "2 per each",
        },
        {
            id: 2,
            zipcode: "940341", 
            img: "https://thumbs.dreamstime.com/b/dragon-fruit-25542562.jpg",
            title: "Dragon Fruit",
            description: "Dragon fruit is high in vitamin C and other antioxidants, which are good for your immune system. It can boost your iron levels.",
            price: "2 per each",
        },
        {
            id: 3,
            zipcode: "940341", 
            img: "https://thumbs.dreamstime.com/b/dragon-fruit-25542562.jpg",
            title: "Dragon Fruit",
            description: "Dragon fruit is high in vitamin C and other antioxidants, which are good for your immune system. It can boost your iron levels.",
            price: "2 per each",
        },
        {
            id: 4,
            zipcode: "940341", 
            img: "https://thumbs.dreamstime.com/b/dragon-fruit-25542562.jpg",
            title: "Dragon Fruit",
            description: "Dragon fruit is high in vitamin C and other antioxidants, which are good for your immune system. It can boost your iron levels.",
            price: "2 per each",
        },
        {
            id: 5,
            zipcode: "940341", 
            img: "https://thumbs.dreamstime.com/b/dragon-fruit-25542562.jpg",
            title: "Dragon Fruit",
            description: "Dragon fruit is high in vitamin C and other antioxidants, which are good for your immune system. It can boost your iron levels.",
            price: "2 per each",
        }
    ];

    return (
    <div className="serachResult">
        <h3> Searched Items around {keyword}</h3>

        <div className="container">
          <div className="card-columns">
              {
                  items.map(item => <CardComponent item={item} addToCart={props.addToCart}/>)
              }
          </div>
        </div>
    </div>);
    
}

/*
{
            items.map(item => <div>{item}</div>)
        }
*/
export default SearchResultComponent;