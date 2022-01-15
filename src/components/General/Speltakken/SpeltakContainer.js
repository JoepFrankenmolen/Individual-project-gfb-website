import React from "react"
import useAxios from "../UseAxios";
import { Route, Switch, match } from 'react-router';
import Speltak from "./Speltak";
import PostContainer from "../Home/PostContainer";

const SpeltakContainer = (props) => {
    const { response, error, loading } = useAxios({
        method: 'get',
        url: '/post/getall/null',
    }); 

    return (
        <div className="speltak-container">
          <div className="speltak-inner-container">
            <Switch>
                <Route path = {props.url + "/*"}>
                    <Speltak/>
                </Route>
                <Route exact path = {props.url}>
                    <PostContainer
                    response={response}
                    error={error}
                    loading={loading}
                    />
                </Route>
            </Switch>
          </div>
        </div>
      )
 
}
export default SpeltakContainer