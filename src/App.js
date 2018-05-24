import React, { Component } from 'react';
import './reset.css'
import './App.css';
import routes from './routes';
import Header from './components/Header/Header';
import axios from 'axios';

class App extends Component {

  componentDidMount(){
    axios.get('/auth/me').then(user => 
    console.log(user.data)
  )
  }

  render() {
    return (
      <div className="App">
        <Header />
        
        
      
        <div className="routes">
          {routes}
        </div>

      </div>
    );
  }
}

export default App;
