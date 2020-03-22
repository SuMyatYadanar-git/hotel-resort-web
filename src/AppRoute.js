import React from "react";
import { BrowserRouter, Redirect, Route, Switch, withRouter } from "react-router-dom";
import * as RoutePath from "./config/route.config";
import Home from "./features/home/container/homeContainer";
import Room from "./features/rooms/container/roomsContainer";
import Contact from "./features/contact/container/contactContainer";
import Restaurant from "./features/restaurants/container/restaurantContainer";
import CheckAvailabilityPage from "./features/pages/checkAvailabilityPage";
import ViewDetailRoomPage from "./features/pages/viewDetailRoomPage";
import UpgradePage from "./features/pages/upgradePage";

import ScrollTopToRoute from './ScrollTopToRoute'
import LoginScreen from "./features/login/LoginScreen";
import AdminDashboardScreen from "./features/admin/admin-dashboard/container/AdminDashboardScreen";

const AppRoute = props => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path={`/${RoutePath.adminDashboard}`} component={AdminDashboardScreen} />
        <Route path={`/${RoutePath.login}`} component={LoginScreen} />
        <ScrollTopToRoute path={`/`} exact component={Home} />
        <ScrollTopToRoute path={`/${RoutePath.Room}`} component={Room} />
        <ScrollTopToRoute path={`/${RoutePath.Contact}`} component={Contact} />
        <ScrollTopToRoute path={`/${RoutePath.Restaurant}`} component={Restaurant} />
        <ScrollTopToRoute path={`/${RoutePath.checkavailability}`} component={CheckAvailabilityPage} />
        <ScrollTopToRoute path={`/${RoutePath.viewdetail}`} component={ViewDetailRoomPage} />
        <ScrollTopToRoute path={`/${RoutePath.upgradepage}`} component={UpgradePage} />
        <Redirect to={`/`} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRoute;
