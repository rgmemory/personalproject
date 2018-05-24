const controller = require('./controller')
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

let {
    SERVER_PORT,
    SESSION_SECRET,
    DOMAIN,
    CLIENT_ID,
    CLIENT_SECRET,
    CALLBACK_URL,
    CONNECTION_STRING
} = process.env

const app = express();

app.use(bodyParser.json())

massive(CONNECTION_STRING).then(db => {
    console.log('database works')
    app.set('db', db)
}).catch(e => {console.log(e, "database error")})

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(passport.initialize());
app.use(passport.session());

passport.use(new Auth0Strategy({
    domain: DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL,//when auth0 authenicates it goes to wherever is listed here
    scope: 'openid profile'
}, function(accessToken, refreshToken, extraParams, profile, done){
    
    let db = app.get('db');
    let {id, name} = profile;

    db.find_user([id]).then(foundUser => {
        if(foundUser[0]){            
            done(null, foundUser[0].authentication)///2nd param here is the id in serialize user below
        }else{
            db.create_user([id, name.givenName]).then(user => {
                console.log(user)
                done(null, user[0].authentication)
            }).catch(e => console.log("error is", e)) 
        }
    }).catch(e => console.log("error is", e))    
}))

passport.serializeUser(function(id, done){//this puts the id in the session store
    done(null, id)
})

passport.deserializeUser(function(id, done){  
    // app.get('db')///grab everything from db that matches this id////////////////////////////////////////////
    app.get('db').find_user([id]).then(user => {
        done(null, user[0]); 
    })
})

app.get('/login', passport.authenticate('auth0'))

app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000',
    failureRedirect: 'http://www.google.com'
}))
///////////////


//put this axios call on the app.js and the .then respons will update the redux store
///fire this function in app.js  componentdid mount to check the current user when the app loads then get user 
app.get('/auth/me', function(req, res){//check to see who is currently logged in
    
    // console.log('req.user', req.user);
    if(req.user){
        res.status(200).send(req.user)///this will be the whole user object after deserialize
    }else{
        res.status(401).send('nice try sucka')
    }
})

app.get('/getsomething', function(req, res){
    res.send(req.user)
})

// app.get('/api/get', controller.apiget)

// app.get('/getuser', function(req, res){
//     console.log(req.user)
// })

app.listen(3005, function(){
    console.log("working on 3005");
})




///I need a session?
///how to use req.user
//set up redux just to pass around the user?
//Do I just store the 3 items in the redux store
//universal styles