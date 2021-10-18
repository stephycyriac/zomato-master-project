//libraries
import express  from "express";
import passport from "passport";

//Database Model
import {UserModel} from "../../database/allModels";

const Router = express.Router();
 /*
Route :     /:_id
des.  :     Get user data
Params:     _id
Access:     none 
method:     GET
*/

Router.get("/:_id" , async(req,res) => {
try {
 const { _id } = req.params;
 const getUser = await  UserModel.findById(_id);
 return res.json({user:getUser});
} catch (error) {
    return res.status(500).json({ error: error.message });
}
});

 /*
Route :     /update/:_id
des.  :     update user id
Params:     _id
Body  :     user data
Access:     Public 
method:     PUT
*/

Router.put("/update/:userId" , async(req, res)=>{
try {
    const { userId } = req.params;
    const {userData} = req.body;

    const updateUserData = await UserModel.findByIdAndUpdate(userId,
     {
    $set:userData,                                                    //set will update only that ppty
    },
    {new:true}
    );   
    return res.json({user:updateUserData});
} catch (error) {
    return res.status(500).json({ error: error.message }); 
}
});
export default Router;