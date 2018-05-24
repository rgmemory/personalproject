
import React from 'react'
import {Switch, Route} from 'react-router-dom';
import House from './components/House/House';
import Listings from './components/Listings/Listings'
import Login from './components/Login/Login'
import Makeoffer from './components/Makeoffer/Makeoffer'
import Myhouses from './components/Myhouses/Myhouses'
import Offers from './components/Offers/Offers'
import Upload from './components/Upload/Upload';
import Main from './components/Main/Main';

export default (
    <Switch>
        <Route exact path = "/" component = {Main}/>
        <Route path = "/listings" component = {Listings}/>
        <Route path = "/house" component = {House}/>
        <Route path = "/login" component = {Login}/>
        <Route path = "/upload" component = {Upload}/>
        <Route path = "/myhouses" component = {Myhouses}/>
        <Route path = "/offers" component = {Offers}/>
        <Route path = "/makeoffer" component = {Makeoffer}/>
    </Switch>
)