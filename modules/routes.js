/**
 * Created by michelle on 16-12-10.
 */

module.exports = function(app, passport) {

    // ==================================================
    // ========= Homepage (with login links) ============
    // ==================================================

    app.get('/', function(req, res) {
        res.render('index.ejs');
    });

    // ==================================================
    // ============= Login ==============================
    // ==================================================
    app.get('/login', function(req, res) {
        // render the page and pass in any flash data if it exists
        res.render('login.ejs', {message: req.flash('loginMessage')});
    });

    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/home',
        failureRedirect : '/login',
        failureFlash : true

    }));

    // ==================================================
    // ============= Logout ==============================
    // ==================================================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });


    // ==================================================
    // ============= Sign up ==============================
    // ==================================================
    app.get('/signup', function(req, res) {
        // render the page and pass in any flash data if it exists
        res.render('signup.ejs', {message: req.flash('signupMessage')});
    });

    // process sign up form
     app.post('/signup', passport.authenticate('local-signup', {
         successRedirect: '/profile',
         failureRedirect : '/signup',
         failureFlash : true
     }));

    app.get('/home', isLoggedIn, function(req, res) {

        res.render('home.ejs', {
            user: req.user
        });
    });

    // ==================================================
    // ============= Profile Section ==============================
    // ==================================================
    // Use route middleware to verify logged in user
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile', {
        user: req.user,
        moments: req.user.moments
        });
    });

    app.get('/moment', isLoggedIn, function(req, res) {
        renderMoments(req, res);
    });

    app.post('/moment', isLoggedIn, function(req, res) {
        var Moment = require('./moment');

        console.log(req.body.content);
        var moment = new Moment({
            user: req.user,
            content: req.body.content
        });

        moment.save(function(err, moment) {
            console.log(moment.user);
        });

        req.user.moments.push(moment);

        renderMoments(req, res);
    });

};
function renderMoments(req, res) {
    res.render('moment', {
        user: req.user,
        moments: req.user.moments
    });
}

// check if the user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    res.redirect('/');
}

