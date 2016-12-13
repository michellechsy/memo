/**
 * Created by michelle on 16-12-10.
 */
// This is where we configure our Strategy for local, facebook, twitter, and google. This is also
// the file where we will create the serializeUser and deserializeUser functions to store our user in session.

// load all the things we need
var LocalStrategy = require('passport-local').Strategy;

// load user model
var User = require('../modules/user');

// expose the function
module.exports = function(passport) {
    // ==========================================================
    // ============= Passport session setup =====================
    // ==========================================================

    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });

    // ==========================================================
    // ============= Local signup ============================
    // ==========================================================

    // use named strategies since we have one for login and one for signup.
    // by default, if there was no name, it would just be called 'local'
    passport.use('local-signup', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true
    },
        function (req, email, password, done) {
            // sync
            process.nextTick( function () {
                User.findOne(
                    { 'local.email' : email }, function (err, user) {
                        if (err) {
                            return done(err);
                        }

                        if (user) {
                            return done(null, false, req.flash('signupMessage', 'That email has' +
                                ' already been taken.'));
                        } else {
                            var newUser = new User();

                            newUser.local.email = email;
                            newUser.local.password = newUser.generateHash(password);

                            newUser.save(function(err) {
                                if (err) {
                                    throw err;
                                }
                                return done(null, newUser);
                            });
                        }
                    }
                );
            });
        }
    ));


    // login
    passport.use('local-login', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true
    },
    function (req, email, password, done) {
        User.findOne({'local.email' : email}, function(err, user) {
            if (err) {
                return done(err);
            }

            if (!user) {
                return done(null, false, req.flash('loginMessage', 'no user found.'));
            }

            if (!user.validPassword(password)) {
                return done(null, false, req.flash('loginMessage', 'Incorrect password'));
            }

            return done(null, user);
        });
    }
    ));

};
