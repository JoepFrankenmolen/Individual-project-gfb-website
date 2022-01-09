import React, {useState} from "react"
import { Route, Switch } from 'react-router';
import PostContainer from './Home/PostContainer';
import Error404 from './PageNotFound';
import AdminContainer from "../Admin/AdminContainer";
import EditorContainer from "../Editor/EditorContainer";
import Login from "./User/Login";
import Register from "./User/Register";
import PostDetails from "./../General/Home/PostDetails";
import Chat from "./Contact/Chat/Chat";
import Contact from "./Contact/Contact";
import SpeltakContainer from "./Speltakken/SpeltakContainer";
import "./../../css/container.css"

const Container = (props) => {

    const [userData, setUserData] = useState(null);///////////////////////NEEDS TO BE DONE

  return (
    <div className="content_container">
        <Switch>
          <Route path = "/admin*">
            <AdminContainer url="/admin"/>
          </Route>
          <Route path = "/editor*">
            <EditorContainer url="/editor"/>
          </Route>
          <Route path = "/speltak*">
            <SpeltakContainer url="/speltak"/>
          </Route>
          <Route exact path = "/posts-details/*" component={PostDetails}/>
          <Route exact path = "/login" component={Login}/>
          <Route exact path = "/register" component={Register}/>
          <Route exact path = "/account" component={Login}/>
          <Route exact path = "/contact" component={Contact}/>
          <Route exact path = "/contact/chat" component={Chat}/>
          <Route exact path = "/">
            <PostContainer
              response={props.response}
              error={props.error}
              loading={props.loading}
            />
          </Route>
          <Route exact path = "/*" component={Error404}/>
        </Switch>
    </div>
  )
}

export default Container