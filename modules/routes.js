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
        successRedirect : '/profile',
        failureRedirect : '/login',
        failureFlash : true

    }));

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

    // ==================================================
    // ============= Profile Section ==============================
    // ==================================================
    // Use route middleware to verify logged in user
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
                // get the user out of session and pass to template
                user: req.user
            }
        );
    });


    // ==================================================
    // ============= Logout ==============================
    // ==================================================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

};

// check if the user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    res.redirect('/');
}