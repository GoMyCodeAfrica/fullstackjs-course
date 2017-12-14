# Authentication and Authorization

### Authentication
is the process of <b>verifying who you are</b>. When you log on to an application with a user name (or any unique identifier) and password you are authenticating.

(Other method to login are possible for example google drive long URL.)

### Authorization
is the process of <b>verifying that you have access to something</b>. Gaining access to a resource (e.g. directory on a hard disk, the permission to update something in the database, page in a website ..)


### Quiz: Answer with Authentication, Authorization or both

- Using my badge to access the company building and some restricted areas.
- Sharing a document in Google drive to another person using his email.
- Using Facebook API to let an application share something in my profile.

## Passport.js

Passport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application.

Passport has many login Strategies:

- passport-facebook
- passport-http-bearer (Bearer tokens are typically used protect API endpoints, and are often issued using OAuth 2.0)
- passport-google-oauth
- passport-twitter
- ...

## Passport: Making our own authentication system with local strategy:

Change your package.json and add this dependencies

```javascript
  ...
  "dependencies" : {
    "express" : "~4.14.0",
    "ejs" : "~2.5.2",
    "mongoose" : "~4.13.1",
    "passport" : "~0.3.2",
    "passport-local" : "~1.0.0",
    "passport-facebook" : "~2.1.1",
    "passport-twitter" : "~1.0.4",
    "passport-google-oauth" : "~1.0.0",
    "connect-flash" : "~0.1.1",
    "bcrypt-nodejs" : "latest",

    "morgan": "~1.7.0",
    "body-parser": "~1.15.2",
    "cookie-parser": "~1.4.3",
    "method-override": "~2.3.6",
    "express-session": "~1.14.1"
  }
  ...
```

run ```npm install```

### Registre a user

Let's start by creating our user model with one method: "createUser".

We will use bcrypt to hash our password as we don't want them to be possible as plain text in our database.

/models/user.js

```javascript
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// User Schema
var UserSchema = mongoose.Schema({
	username: {
		type: String,
		index:true
	},
	password: {
		type: String
	},
	email: {
		type: String
	},
	name: {
		type: String
	}
});

var User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = function(newUser, callback){
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newUser.password, salt, function(err, hash) {
	        newUser.password = hash;
	        newUser.save(callback);
	    });
	});
}
```


Let's now use this model to create and endpoint /registre which recieve a user object and save it to our database.

We will require some dependencies related to passport.

in your entry file (index.js, app.js or server.js ..) require these packages:

```javascript
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var passport = require('passport');
var User = require('./models/user')
```

Let's connect to our database.

```javascript
// Conenct to DB
mongoose.connect('mongodb://localhost/loginapp');
var db = mongoose.connection;

```

Parse JSON from request, add Session and add passport middleware

```javascript
// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());
```

Session: An object saved by the backend for one user.


Let's add an endpoint to save users to database. (P.S. Nothing from passport is used here)

```javascript
// Register User
app.post('/register', function(req, res){
	var password = req.body.password;
	var password2 = req.body.password2;

  if (password == password2){
    var newUser = new User({
  		name: req.body.name,
  		email: req.body.email,
  		username: req.body.username,
  		password: req.body.password
  	});

  	User.createUser(newUser, function(err, user){
  		if(err) throw err;
  		res.send(user).end()
  	});
  } else{
    res.status(500).send("{errors: \"Passwords don't match\"}").end()
  }
});

app.listen(3000, () => console.log('App listening on port 3000!'))
```

### Login: time to login our users


Let's add some methods to our user model:

/models/user.js

```javascript
module.exports.getUserByUsername = function(username, callback){
	var query = {username: username};
	User.findOne(query, callback);
}

module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    	if(err) throw err;
    	callback(null, isMatch);
	});
}
```

Back to our entrypoint.
Let's add some code to define how our local strategy works (using method from the model user).


```javascript
var LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(
  function(username, password, done) {
    User.getUserByUsername(username, function(err, user){
   	  if(err) throw err;
   	  if(!user){
   		   return done(null, false, {message: 'Unknown User'});
   	  }

     	User.comparePassword(password, user.password, function(err, isMatch){
     		if(err) throw err;
     		if(isMatch){
     			return done(null, user);
     		} else {
     			return done(null, false, {message: 'Invalid password'});
     		}
     	});
   });
  }
));
```

Let's define to passport how to serialize user for every request to our application, which make it possible latter to get user with "req.user"

```javascript
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, user) {
    done(err, user);
  });
});
```

Time to create some endpoints: Login, get user and logout

```javascript
// Endpoint to login
app.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    res.send(req.user);
  }
);

// Endpoint to get current user
app.get('/user', function(req, res){
	res.send(req.user);
})


// Endpoint to logout
app.get('/logout', function(req, res){
	req.logout();
	res.send(null)
});
```

## Integration with Facebook
Passport make it easy to integrate our authentication system with other systems like facebook, twitter, google etc.

Let's make it possible to login with Facebook


Fist let's use facebook as a Strategy:

First Step is to create a facebook app: Go to developers.facebook.com and click "create app"

Add a product: Facebook Login. You must add "http://localhost:3000/auth/facebook/callback" as a valid redirect url.

Save the APP_ID and SECRET_KEY somewhere we will use it later.

Time to go back to our code.

```javascript
var FacebookStrategy = require('passport-facebook').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
passport.use(new FacebookStrategy({
    clientID: "APP_ID",
    clientSecret: "SECRET_KEY",
    callbackURL: "http://localhost:3000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(profile)
    // TODO: do sth with returned values
  });
}));
```

Endpoints for facebook auth and a callback that the facebook api will redirect to after the user give our application permission to use his account.
```javascript
app.get('/auth/facebook',
  passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    console.log(req.user)
    res.redirect('/');
  }
);
```

That's it easy as that.

## Save the facebook users

Let's update our user schema:

```javascript
var UserSchema = mongoose.Schema({
	username: {
		type: String,
		index:true
	},
	password: {
		type: String
	},
	email: {
		type: String
	},
	name: {
		type: String
	},
  facebook: {
    id           : String,
    token        : String,
    email        : String,
    name         : String
  },
});
```

Change the facebook callback strategy and make it either save the user or just login if the user already registered.

```javascript
function(accessToken, refreshToken, profile, done) {
  User.findOne({ 'facebook.id' : profile.id }, function(err, user) {
    if (err) return done(err);
    if (user) return done(null, user);
    else {
      // if there is no user found with that facebook id, create them
      var newUser = new User();

      // set all of the facebook information in our user model
      newUser.facebook.id = profile.id;
      newUser.facebook.token = accessToken;
      newUser.facebook.name  = profile.displayName;
      if (typeof profile.emails != 'undefined' && profile.emails.length > 0)
        newUser.facebook.email = profile.emails[0].value;

      // save our user to the database
      newUser.save(function(err) {
          if (err) throw err;
          return done(null, newUser);
      });
    }
  });
}
```

Code can be found here: https://github.com/GoMyCodeAfrica/login-app-passport

# Task: Add another auth strategy

Time for you to add another strategy (Google for example).

Tutorial: https://scotch.io/tutorials/easy-node-authentication-google
