//libraries
import express  from "express";
import passport from "passport";

//Database Model
import {FoodModal} from "../../database/allModels";

//validation
import { ValidateRestaurantId , ValidateCategory } from "../../validation/food";
const Router = express.Router();
 /*
Route :     /r
des.  :     Get all food based on particular restaurant
Params:     id
Access:     public
method:     GET
*/
Router.get("/r/:_id", async (req, res) => {
    try {
      await ValidateRestaurantId (req.params);
      const { _id } = req.params;
      const foods = await FoodModal.find({ restaurant: _id });
  
      return res.json({ foods });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });

  /*
Route     /c
Des       Get all food based on particular category
Params    category
Access    Public
Method    GET  
*/
Router.get("/r/:category", async (req, res) => {
    try {
      await ValidateCategory(req.params);
      const { category } = req.params;
      const foods = await FoodModal.find({
        category: { $regex: category, $options: "i" },
      });
  
      return res.json({ foods });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });

  export default Router;