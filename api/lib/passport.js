import passport from 'passport'
import passportGoogleOAuth from 'passport-google-oauth20'
const GoogleStrategy = passportGoogleOAuth.Strategy
const oauthInfo = '../../credentials/oauth-config.json' 

passport.use(new GoogleStrategy({
    clientID: oauthInfo.id,
    clientSecret: oauthInfo.secret,
    callbackURL: "http://localhost:3000/api/login/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    return cb(null, profile);
  }
));

passport.serializeUser((user, done) => {
    done(null, user); // user객체가 deserializeUser로 전달됨.
  });
  passport.deserializeUser((user, done) => {
    done(null, user); // 여기의 user가 req.user가 됨
  });