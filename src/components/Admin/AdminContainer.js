import React, { useState, useEffect } from "react"
import { Route, Switch, match } from 'react-router';
import GroupContainer from './Group/GroupContainer';
import UserContainer from './User/UserContainer'
import PageNotFound from "../General/PageNotFound";
import './../../css/Admin/admin.css'
import GroupDetails from "./Group/GroupDetails";

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
            <a>this is the admin section. here will be buttons displayed to navigate to your desired subsection</a>
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default AdminContainer


