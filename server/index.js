//require packages
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require ('cors');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const sessions = require('express-session');
const bcrypt = require('bcrypt');

// VANILLA NODE SERVER

// const http = require('http');

// const server = http.createServer((req, res) => {
//     // do everything here
// });

// server.listen(foo, () => {
//     console.log(foo);
// });

require('dotenv').config({ path: __dirname + '/.env' });

//controllers
const controller = require('./controller');

//deconstruct variables
const { DB_CONNECTION_STRING } = process.env;

//middleware
const app = express();
app.use(cors());
app.use(bodyParser.json());

//database connection
massive(DB_CONNECTION_STRING, { scripts: __dirname + '/db' })
    .then((dbInstance) => {
        app.set('db', dbInstance);
    }).catch((error) => {
        console.log('failed', error);
    });

//setup sessions
app.use(sessions({
    saveUninitialized: false,
    resave: false,
    secret: "shhh it's a secret"
}));

//setup passport
app.use(passport.initialize());
app.use(passport.session());

passport.use('login', new LocalStrategy(function (username, password, done) {
    //check to make sure username and password exist
    if(username.length === 0 || password.length === 0) {
        return done(null, false, { message: "Username and Password are required" });
    };

    //capture db instance
    const db = app.get('db');

    //find user in db
    db.users.find({ username })
        .then(userInfo => {
            //capture user info
            const user = userInfo[0];
            //remove password before sending back to client
            delete user.password;
            done(null, user);
        }).catch(error => {
            console.log(error.message);
        });
}));

passport.use('register', new LocalStrategy({ passReqToCallback: true, usernameField: 'email' }, function(req, email, password, done) {
    //check to make sure username and password exist
    if(email.length === 0 || password === 0) {
        return done(null, false, { message: "Username and Password are required" });
    }

    //capture db instance
    const db = app.get('db');

    //has the new users password
    const hashedPassword = bcrypt.hashSync(password, 15);

    db.users.find({email})
        .then(userInfo => {
            //check to make sure username is not already taken
            if(userInfo.length > 0) {
                return done(null, false, { message: "Username is not available" })
            }

            const {
                firstName: first_name,
                lastName: last_name,
                password: ignoredPassword,
                confirmPassword: ignoredField,
                ...registrationData
            } = req.body;
            
            //create user if username is available
            return db.users.insert({
                first_name,
                last_name,
                password: hashedPassword,
                ...registrationData,
            });
        }).then((newUser) => {
            //remove password before sending back to client
            delete newUser.password;
            done(null, newUser);
        }).catch(error => {
            console.log(error.message);
        });
}));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((id, done) => {
    done(null, id);
})

//auth endpoints
app.post('/auth/login', passport.authenticate('login'), (req, res) => {
    const { user } = req;
    res.send(user);
});
app.post('/auth/register', passport.authenticate('register'), (req, res) => {
    const { user } = req;
    res.send(user);
});

//events endpoints
app.get('/api/events', controller.getAllEvents);
app.post('/api/events', controller.createEvent);
app.delete('/api/events/:id', controller.deleteEvent);

//get server listening on a port
app.listen(4005, () => {
    console.log('Server is running on localhost:4005')
}); 