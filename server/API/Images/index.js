//libraries
import express  from "express";
import passport from "passport"; 
import multer from "multer";
//Database Model
import {ImageModel} from "../../database/allModels";

//utitlites
import {s3Upload} from "../../Utils/AWS/s3";

const Router = express.Router();

//Multer Config
const storage = multer.memoryStorage();
const upload = multer({storage});

 
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
      Bucket:"shapeai-intership",
      Key:file.originalname, 
      Body: file.buffer, 
      ContentType:file.mimetype,
      ACL:"public-read", //access control list
    };
    

const uploadImage= await s3Upload(bucketOptions);
return res.status(200).json({uploadImage});
} catch (error) {
    return res.status(500).json({ error: error.message });
}
});
export default Router;