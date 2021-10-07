/*import axios from "axios";
import React from "react";

const baseURL = "http://localhost:8080/groups";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}*/

import axios from "axios";
import React, { useState, useEffect } from "react"
import GroupList from "./GroupList"
import { v4 as uuidv4 } from "uuid"

const baseURL = "http://localhost:8080/groups"

const GroupContainer = () => { 

    const [groups,setGroup] = useState(null);

    useEffect(() => {
    axios.get(baseURL).then((response) => {
        setGroup(response.data);
    });
    }, []);

    
  if (!groups) return null;

   
    return (
    <div className="container">
        <div className="inner">
            <GroupList
                groups={groups}
            />
        </div>
    </div>
    )
}

export default GroupContainer