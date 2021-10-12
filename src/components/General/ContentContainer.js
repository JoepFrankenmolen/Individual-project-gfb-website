import React from "react"
import { Route, Switch } from 'react-router';
import Home from './Home';
import AdminContainer from "../Admin/AdminContainer";

const ContentContainer = () => {

return (
    <div className="test">
        <Switch>
          <Route path = "/admin*">
            <AdminContainer url="/admin"/>
           </Route>
          <Route exact path = "/*" component={Home}/>
        </Switch>
    </div>
  )
}

export default ContentContainer