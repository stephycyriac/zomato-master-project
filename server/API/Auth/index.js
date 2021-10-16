//Library
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import passport from "passport";
//Models
import {UserModel} from "../../database/user";

const Router = express.Router();

/*
Route :     /signup
des.  :     register new user
Params:     none
Access:     public
method:     POST
*/
Router.post("/signup" , async(req,res) => {
    try {
        await UserModel.findByEmailAndPhone(req.body.credentials);
       // save to database
      const newUser =  await UserModel.create (req.body.credentials); //updating existing password with hashed password

       //generate JWT auth token
      const token = newUser.generateJwtToken();  //secretkey

       //return
       
    return res.status(200).json({token , status:"Success"});
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
 });

 /*
Route :     /signin
des.  :     Signup with email and password
Params:     none
Access:     public
method:     POST
*/

Router.post("/signin" , async(req,res) => {
    try {
        
      const user =  await UserModel.findByEmailAndPassword(req.body.credentials);

    //generate JWT auth token
      const token = user.generateJwtToken();  //secretkey
     //return  
    return res.status(200).json({token , status:"Success"});
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
 });

 /*
Route :     /google
des.  :     Google signin
Params:     none
Access:     public
method:     GET
*/
Router.get( "/google", passport.authenticate("google", {  scope: 
      [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
      ],
    })
  );
  
  /*
  Route     /google/callback
  Des       Google Signin Callback
  Params    none
  Access    Public
  Method    GET  
  */
  Router.get(
    "/google/callback",
    passport.authenticate("google", { failureRedirect: "/" }),
    (req, res) => {
      return res.json({token:req.session.passport.user.token});
    }
  );
export default Router;