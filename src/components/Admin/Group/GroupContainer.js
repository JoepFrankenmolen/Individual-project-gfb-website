import axios from "axios";
import React, { useState, useEffect } from "react"
import GroupList from "./GroupList"
import GroupSearchBar from "./GroupSearchBar"
import GroupDetails from "./GroupDetails";
import pageNotFound from "../../General/PageNotFound";



const GroupContainer = (props) => { 
    const baseURL = "http://localhost:8080/group"

    const [groups,setGroup] = useState(null);
    const [group,setGroupId] = useState(null);

    useEffect(() => 
    {
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
    
    //safe guard??
    if (groups== null) {
      props.noConnection()
      return null
    };

    return (
    <div className="container">
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