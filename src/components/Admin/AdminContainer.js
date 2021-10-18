import React, { useState, useEffect } from "react"
import { Route, Switch, match } from 'react-router';
import GroupContainer from './Group/GroupContainer';
import UserContainer from './User/UserContainer'
import './../../css/admin.css'

const AdminContainer = (props) => {
    const {url} = props;
  return (
    <div className="admincontainer">
       <p>this is the place where all the checking if valid will take place will take place</p>
        <a>for now this is what I will have. this will be the admin section so it wont be seen by the everyday users. also there will be a button that when you hit it will show the information of the specific item</a>

      <div>
        <Switch>
          <Route path = {url + "/users"} component={UserContainer}/>
          <Route path = {url +"/groups"} component={GroupContainer}/>
        </Switch>
      </div>
    </div>
  )
}

export default AdminContainer


