import { Route,  Redirect}from "react-router-dom";

//HOC
import HomeLayoutHOC from "./HOC/Home.Hoc";
import RestaurantLayoutHOC from "./HOC/Restaurant.HOC";


//Pages
import Home from "./Page/Home"; 
import Temp from "./Components/temp";
import Overview from "./Page/RestaurantTabs/Overview";
import OrderOnline from "./Page/RestaurantTabs/OrderOnline";
import Reviews from "./Page/RestaurantTabs/Reviews";
import Menu from "./Page/RestaurantTabs/Menu";
import Photos from "./Page/RestaurantTabs/Photos";



function App() {
  return (
 <>
 <Route path="/" exact >
<Redirect to="/delivery"/>
 </Route>
 <Route path="/restaurant/:id" exact >
<Redirect to="/restaurant/:id/overview"/>
 </Route>
 <HomeLayoutHOC path="/:type" exact component={Home}/>

 <RestaurantLayoutHOC path="/restaurant/:id/overview" exact component={Overview}/>
 <RestaurantLayoutHOC path="/restaurant/:id/photos" exact component={Photos}/>
 <RestaurantLayoutHOC path="/restaurant/:id/order-online" exact component={OrderOnline}/>
 <RestaurantLayoutHOC path="/restaurant/:id/menu" exact component={Menu}/>
 <RestaurantLayoutHOC path="/restaurant/:id/reviews" exact component={Reviews}/>
 </>
  );
}

export default App;
