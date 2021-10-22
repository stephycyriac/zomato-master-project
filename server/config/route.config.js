import passport from "passport";
import Jwtpassport from "passport-jwt";


//database model
import { UserModel } from "../database/user";           //we have to check whether user exists or not
const JWTStrategy = Jwtpassport.Strategy;
const ExtractJwt = Jwtpassport.ExtractJwt;

const options = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
     secretOrKey:"ZomatoAPP",
};
 export default(passport) => {
     passport.use(
new JWTStrategy(options, async (jwt__payload , done) => {
    try {
        const doesUserExist = UserModel.findById(jwt__payload.user);
        if(!doesUserExist) return done(null , false);
        return done(null ,  doesUserExist );
    } catch (error) {
        throw new Error(error);
    }
})
  );
 };