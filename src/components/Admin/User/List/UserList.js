import React from "react"
import UserItem from "./UserItem"
import useAxios from "../../../General/UseAxios"

const UserList = () => {

  const { response, error, loading } = useAxios({
    method: 'get',
    url: '/user/',
    headers: 
    {
        Authorization: sessionStorage.getItem("token"),
    },
  }); 

  if(response !== null)
  {
    return (
      <div className="admin-user-list-container">
        {response.map(user => (
          <UserItem
            key={user.userId}
            user={user}
          />
        ))}
      </div>
    )
  }
  else
  {
    return(
      <div className="admin-user-list-container">
        error
      </div>
    )
  }
  
}
export default UserList