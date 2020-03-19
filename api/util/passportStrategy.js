import passport from 'passport'
import passportJWT from 'passport-jwt'
const JWTStrategy = passportJWT.Strategy
const ExtractJWT = passportJWT.ExtractJwt
import passportLocal from 'passport-local'
const LocalStrategy = passportLocal.Strategy

import { UserService } from '../service'
const userService = new UserService()

require('dotenv').config()

export const passportStrategy = () => {
    // Local Strategy
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
        (email, password, done) => {
            return userService.getAuth(email, password)
                .then(user => done(null, user))
                .catch(err => done(err))
        }
    ))

    //JWT Strategy
    passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET
    },
        (jwtPayload, done) => {
            return userService.getUserByEmail(jwtPayload.email)
                .then(user => done(null, user))
                .catch(err => done(err))
        }
    ))
}