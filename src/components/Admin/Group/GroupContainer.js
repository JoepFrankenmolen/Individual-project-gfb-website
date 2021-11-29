import axios from "axios";
import React, { useState, useEffect } from "react"
import GroupList from "./GroupList"
import GroupSearchBar from "./GroupSearchBar"
import GroupDetails from "./GroupDetails";
import PageNotFound from "../../General/PageNotFound";



const GroupContainer = (props) => { 
    const baseURL = process.env.REACT_APP_GROUP;

    const [groups,setGroup] = useState(null);
    const [group,setGroupId] = useState(null);

    useEffect(() => 
    {
      console.log(baseURL)
      setGroups(baseURL);
    }, []);

    const setGroups = url =>
    {
        axios.get(url).then((response) => 
        {
          setGroup(response.data);
        }).catch(error => console.log(error));

      
    }

    const useFilter = filter =>
    {
      if(filter.trim() != "")
      {
        setGroups(baseURL +"?filter="+ filter);
        console.log(filter);
      }
      else
      {
          setGroups(baseURL)
      }
    }

    const getGroupDetails = (id) =>
    {
      axios.get(baseURL+"/"+id).then((response) => 
      {
        setGroupId(response.data);
      });
    }
    
    //safe guard?? will be done like this but better in the furte
    if (groups == null) {
      
      return (
        <div className="main">{props.noConnection()}</div>
        
      )
    };

    return (
    <div className="group_container">
      <div className="group_info_bar">
        <div className="group_info">
          <div className="group_name">
            <h1>group editor</h1>
          </div>
          
          <div className="group_description">
            <a>Here you can see, edit and create groups. Click a group to get the details.</a>
          </div>
        </div>
        <div className="group_button">
          <div className="group_create_button">
              <a>create group</a>
          </div>
        </div>
      </div>
      
      
      <GroupSearchBar useFilter={useFilter}/>
      <GroupList
          groups={groups}
          getGroupDetails={getGroupDetails}
      />
      
      <GroupDetails 
          group = {group}
      />
    </div>
    )
}

export default GroupContainer