import React, { useState, useEffect } from "react"
import { Route, Switch, match } from 'react-router';
import GroupContainer from './Group/GroupContainer';
import UserContainer from './User/UserContainer'
import PageNotFound from "../General/PageNotFound";
import './../../css/Admin/admin.css'
import GroupDetails from "./Group/GroupDetails";
import UserDetails from "./User/UserDetails"
import AdminOptions from "./Admin/AdminOptions";
import AdminStatistics from "./Admin/AdminStatistics";

const AdminContainer = props => {

  const noConnections = () =>{
      return(
        <PageNotFound
            code={500}
            message={"no server connection"}
          />
      )
  }

  const {url} = props;

  return (
    <div className="admin_container">
      <div className="admin_inner_container">
        <Switch>
        <Route exact path = {url + "/users/*"} component={UserDetails}/>
          <Route path = {url + "/users"}>
            <UserContainer
              noConnection={noConnections}
            />
            </Route>
          <Route exact path = {url + "/groups/*"} component={GroupDetails}/>
          <Route path = {url +"/groups"}>
            <GroupContainer/>
          </Route>
          <Route path = {url +"/"}>
            <div className="main-admin-page">
              <AdminOptions/>
              <AdminStatistics/>
            </div>
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default AdminContainer


