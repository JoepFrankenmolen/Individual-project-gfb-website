import axios from "axios";
import React, { useState, useEffect } from "react"
// import GroupList from "./GroupList"
// import GroupSearchBar from "./GroupSearchBar"
// import GroupDetails from "./GroupDetails";
// import PageNotFound from "../../General/PageNotFound";
import UserList from "./List/UserList"
import UserSave from "./UserSave"
import "./userAdmin.css"



const UserContainer = (props) => { 
  return(
    <div className="admin-user-container">
      <div className="admin-user-box">
        <div className="admin-user-save">
          <UserSave/>
        </div>
        <div className="admin-user-list">
          <UserList/>
        </div>
      </div>
    </div>
  )
}

export default UserContainer