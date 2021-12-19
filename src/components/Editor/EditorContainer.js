import React, { useState, useEffect } from "react"
import { Route, Switch, match } from 'react-router';
import CreatePost from './Post/CreatePost'
import PageNotFound from "../General/PageNotFound";
import './../../css/Admin/admin.css'

const EditorContainer = props => {

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
            <Route path = {url + "/post"}>
                <CreatePost/>
            </Route>
          {/* <Route path = {url +"/groups"}>
            <GroupContainer
                noConnection={noConnections}
              />
          </Route> */}
          <Route path = {url +"/"}>
            <a>this is the editor section. here will be buttons displayed to navigate to your desired subsection</a>
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default EditorContainer


