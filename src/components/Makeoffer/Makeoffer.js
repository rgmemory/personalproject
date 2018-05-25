import React, {Component} from 'react';
import {connect} from 'react-redux';
import {input} from '../../ducks/reducer'

export default class Makeoffer extends Component{
    


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

function mapStateToProps(state){
    return{
        
    }
}

 connect(mapStateToProps)(Makeoffer);
