import React from "react";
import { BrowserRouter, Redirect, Route, Switch,withRouter } from "react-router-dom";
import * as RoutePath from "./config/route.config";
import Home from "./features/home/container/homeContainer";
import Room from "./features/rooms/container/roomsContainer";
import Contact from "./features/contact/container/contactContainer";
import Restaurant from "./features/restaurants/container/restaurantContainer";
import Footer from "./features/app/footer";
import CheckAvailabilityPage from "./features/pages/checkAvailabilityPage";
import ViewDetailRoomPage from "./features/pages/viewDetailRoomPage";
import UpgradePage from "./features/pages/upgradePage";


const AppRoute = props => {
  
  
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Switch>
        <Route path={`/`} exact component={Home} />
        <Route path={`/${RoutePath.Room}`} component={Room} />
        <Route path={`/${RoutePath.Contact}`} component={Contact} />
        <Route path={`/${RoutePath.Restaurant}`} component={Restaurant} />
        <Route path={`/${RoutePath.checkavailability}`} component={CheckAvailabilityPage} />
        <Route path={`/${RoutePath.viewdetail}`} component={ViewDetailRoomPage} />
        <Route path={`/${RoutePath.upgradepage}`} component={UpgradePage} />
        <Redirect to={`/`} />
      </Switch>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default AppRoute;
