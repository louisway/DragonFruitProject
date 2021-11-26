import React, {Component} from 'react';
import { useNavigate } from 'react-router-dom';
import './homepage.css';


class HomePageComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchContent: "",
        }
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (
            <div className="HomePageComponent">
                <div className="SearchArea">
                    <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" onChange={this.handleChange}/>
                </div>
                <SearchButton keyword={this.state.searchContent} />
            </div>
        );
    }

    handleChange(event) {
        this.setState({
            searchContent:event.target.value
        })
    }
}

function SearchButton(props) {

    let navigate = useNavigate();
    function clickSearch() {
        navigate(`/search/${props.keyword}`);
    }

    return ( 
        <div className="SearchButton">
            <button type="button" className="btn btn-secondary" onClick={clickSearch} >Search</button>
        </div>
    );
}

export default HomePageComponent;