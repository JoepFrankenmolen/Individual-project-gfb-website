import React, { useState, useEffect } from "react"
import { Route, Switch, useHistory } from 'react-router';
import PostContainer from './Post/PostContainer'
import PageNotFound from "../General/PageNotFound";

const EditorContainer = props => {
  const history = useHistory();
  const [once,setOnce] = useState(false);
  const goBack = () =>{
    if(sessionStorage.getItem("token") === null && once === false)
    {
        setOnce(true)
        history.goBack()
    }
}


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
    <div className="editor-container">
      {goBack()}
        <Switch>
            <Route path = {url + "/post"}>
                <PostContainer/>
            </Route>
          <Route path = {url +"/"}>
            <a>this is the editor section. here will be buttons displayed to navigate to your desired subsection</a>
          </Route>
        </Switch>
    </div>
  )
}

export default EditorContainer


