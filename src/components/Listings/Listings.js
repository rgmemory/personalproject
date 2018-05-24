import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Listings extends Component{
    constructor(){
        super()
    }


    render(){
        return(
            <div>
                Listings
                <Link to="/"><button>Back to search</button></Link>

                <Link to="/house"><button>House Listing</button></Link>
            </div>
        )
    }
}