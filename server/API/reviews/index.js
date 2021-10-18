//libraries
import express  from "express";
import passport from "passport";

//Database Model
import {ReviewModel} from "../../database/allModels";

const Router = express.Router();
 /*
Route :     /food/new                                    
des.  :     add new food review/rating
Params:     none
Body  :     review object
Access:     public
method:     POST
*/
Router.post("/new" , async(req,res)=>{
try {
    const {reviewData} = req.body;
    await ReviewModel.create(reviewData);
    return res.json({review:"Succesfully created review."});
} catch (error) {
    return res.status(500).json({ error: error.message }); 
}
});
 /*
Route :     /delete                                
des.  :     delete food review/rating
Params:     _id
Body  :     none
Access:     public
method:     DELETE
*/

Router.delete("/delete/:id" , async (req,res) =>{
try {
    const {_id} = req.params;
    await ReviewModel.findByIdAndDelete(_id);
    return res.json({review:"Succesfully deleted the review."});
} catch (error) {
    return res.status(500).json({ error: error.message }); 
}
});
export default Router;