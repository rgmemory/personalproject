import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './main.css'


export default class Main extends Component{
    constructor(){
        super()

        this.state = {
            listings: []
        }

        this.updateListings = this.updateListings.bind(this);
        this.getListings = this.getListings.bind(this);
    }

    updateListings(value){
        this.setState({
            listings: value
        })
    }

    getListings(){
        console.log("listings works")
        axios.get('api/get').then(res => {
            console.log(res.data)
        })
    }

    render(){

        var formattedListings = this.state.listings.map(house => {
            return(
                <div>
                    house
                </div>
            )
        })
        return(
            <div className="main">
                <h2>Main</h2>
                <div className="center">
                    <input type="text" onChange={e => this.updateListings(e.target.value)}/>
                    <Link to='/listings'><button onClick={this.getListings}> Search </button></Link>
                    {formattedListings}
                </div>
            </div>
        )
    }
}