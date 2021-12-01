import React from "react"
import { Route, Switch } from 'react-router';
import Home from './Posts/Home';
import Error404 from './PageNotFound';
import AdminContainer from "../Admin/AdminContainer";
import Login from "./User/Login";
import "./../../css/container.css"

const ContentContainer = () => {

return (
    <div className="content_container">
        <Switch>
          <Route path = "/admin*">
            <AdminContainer url="/admin"/>
           </Route>
           <Route exact path = "/login" component={Login}/>
           <Route exact path = "/myAccount" component={Login}/>
           <Route exact path = "/" component={Home}/>
          <Route exact path = "/*" component={Error404}/>
        </Switch>
    </div>
  )
}

export default ContentContainer