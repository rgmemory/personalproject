import React, {Component} from 'react';

export default class Makeoffer extends Component{
    constructor(){
        super()
    }


    render(){
        return(
            <div>
                Makeoffer

                Offer:<input type="text" />
                <button>Submit offer</button>
            </div>
        )
    }
}