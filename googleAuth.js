const passport=require("passport")
const GoogleStrategy=require("passport-google-oauth2").Strategy
require("dotenv").config()
passport.serializeUser(function(user,done){
    console.log("kkkkkkkkkkkkkkkkkkk");
    done(null,user)
});

passport.deserializeUser(function (user, done) {
    console.log(user,"++++++++++++++++++++++++==");
    done(null,user)
});
passport.use(new GoogleStrategy({
    clientID:process.env.GoogleclientId,
    clientSecret:process.env.googleclientSecret,
    callbackURL :"/google/callback"
},
function(accessToken, refreshToken, profile, done) {
    console.log(profile._json,"llllllllllllllll");
    done(null, profile);
}))