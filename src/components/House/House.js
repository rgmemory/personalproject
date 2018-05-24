import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class House extends Component{
    constructor(){
        super()
    }


    render(){
        return(
            <div>
                House

                <Link to="/makeoffer"><button>Make an offer</button></Link>
            </div>
        )
    }
}