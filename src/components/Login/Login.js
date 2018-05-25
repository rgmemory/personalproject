import React, {Component} from 'react';
import {connect} from 'react-redux';

class Login extends Component{

    render(){
        return(
            <div>
                Login
                {/* {this.props.username} */}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        // username: state.username
    }
}



export default connect(mapStateToProps)(Login)