import React from "react"
import useAxios from "../../General/UseAxios";

const UserDetails = () => {

    var id = window.location.pathname.replace("/admin/users/","")

    //the groups the user can chose from to start
    const { response, error, loading } = useAxios({
      method: 'get',
      url: '/user/'+ id,
      headers: 
      {
          Authorization: sessionStorage.getItem("token"),
      },
    }); 

  if(response !== null)
  {
    return (
      <div class="admin-user-details">
          <a>name:{response.name}</a>
          <a>username:{response.username}</a>
          <a>email:{response.email}</a>   
          <a>active:{response.active.toString()}</a>
      </div>
    )
  }
  else
  {
    return (
      <div class="admin-user-details">
          error
      </div>
    )
  }

}
export default UserDetails