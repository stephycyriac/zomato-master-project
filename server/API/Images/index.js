//libraries
import express  from "express";
import passport from "passport";
import AWS from "aws-sdk";
import multer from "multer";
//Database Model
import {ImageModel} from "../../database/allModels";

const Router = express.Router();

//Multer Config
const storage = multer.memoryStorage();
const upload = multer({storage});

//AWS S3 bucket config
const s3Bucket = new AWS.S3({
accessKeyId:process.env.AWS_S3_ACCESS_KEY,
secretAccessKey:process.env.AWS_S3_SECRET_KEY,
region:"ap-south-1",
});
 
 /*
Route :     /image
des.  :     Uploads given image to S3 bucket and save file link to mongodb
Params:     none
Access:     public
method:     POST
*/

Router.post ("/" , upload.single("file") , async(req,res) => {
try {
    const file= req.file;

    //S3 bucket options
    const bucketOptions = {
      Bucket:"shapeai-intership-zomato",
      Key:file.originalname, 
      Body: file.buffer,
    };
} catch (error) {
    return res.status(500).json({ error: error.message });
}
});
export default Router;