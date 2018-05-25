import React, { Component } from 'react';
import './reset.css'
import './App.css';
import routes from './routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import axios from 'axios';
import {getUser} from './ducks/reducer';
import {connect} from 'react-redux';
import Makeoffer from './components/Makeoffer/Makeoffer'
import Login from './components/Login/Login'

class App extends Component {

  constructor(){
    super()  
  }

  componentDidMount(){
    axios.get('/auth/me').then(user => {
      console.log(user.data)
      this.props.getUser(user.data)
    }
  )
}

  render() {
    return (
      <div className="App">
        <Header />      
        <div className="routes">
          {routes}
        </div>  
        {/* <Makeoffer/>   */}

        {/* <Footer /> */}

        {/* <Makeoffer/>
        <Login/>     */}
      </div>
    );
  }
}

const mapDispatchToProps = {
  getUser: getUser
}

export default connect(null, mapDispatchToProps)(App);

