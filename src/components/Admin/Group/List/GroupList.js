import React from "react"
import GroupItem from "./GroupItem"
import useAxios from "./../../../General/UseAxios"

const GroupList = () => {

  const { response, error, loading } = useAxios({
    method: 'get',
    url: '/group/null/null',
    headers: 
    {
        Authorization: sessionStorage.getItem("token"),
    },
  }); 

  if(response !== null)
  {
    return (
      <div className="admin-group-list-container">
        {response.map(group => (
          <GroupItem
            key={group.id}
            group={group}
          />
        ))}
      </div>
    )
  }
  else
  {
    return(
      <div className="admin-group-list-container">
        error
      </div>
    )
  }
  
}
export default GroupList