//importing env variables
require("dotenv").config();

//libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

//configs
import googleAuthConfig from "./config/google.config";


//microservice route
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant";
import Food from "./API/Food";
import Images from "./API/Images";
import orders from "./API/orders";
import reviews from "./API/reviews";
import User from "./API/User";
import Menu from "./API/Menu";
//database connection
import ConnectDB from "./database/connection";

const zomato = express();

//application middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({extended:false}));
zomato.use(helmet());
zomato.use(cors());
zomato.use(passport.initialize());
zomato.use(passport.session());

//passport configuration 
googleAuthConfig(passport);


//appication routes
zomato.use("/auth" , Auth);
zomato.use("/restaurant" , Restaurant);
zomato.use("/food" , Food); 
zomato.use("/image",Images);
zomato.use("/order",orders);
zomato.use("/reviews",reviews);
zomato.use("/user",User);
zomato.use("/menu",Menu);

zomato.get("/" , (req,res) => res.json({message:"setup success"}));

zomato.listen(4000,() => ConnectDB()
.then(() => console.log("Server is running "))
.catch(() => console.log("Server is running but database connection failed "))
);