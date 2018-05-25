import React, {Component} from 'react';
import './Header.css'
import {Link} from 'react-router-dom'
// import {connect} from 'react-redux'

export default class Header extends Component{
    constructor(){
        super()
    }


    render(){
        return(
            <div className="header">
                <div className="logo">
                <Link to="/"><button>Logo</button></Link>
                </div>

                <div className="login">
                    <Link to="/login"><button>Login</button></Link>
                </div>
            </div>
        )
    }
}

