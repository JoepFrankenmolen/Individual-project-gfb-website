import React from "react"
import useAxios from "../../General/UseAxios";

const GroupDetails = () => {

    var id = window.location.pathname.replace("/admin/groups/","")

    //the groups the user can chose from to start
    const { response, error, loading } = useAxios({
      method: 'get',
      url: '/group/'+ id,
      headers: 
      {
          Authorization: sessionStorage.getItem("token"),
      },
    }); 

  if(response !== null)
  {
    return (
      <div class="admin-group-details">
          <h3>img {response.pictureUrl}</h3>
          <a>name:{response.name}</a>
          <a>category:{response.category}</a>   
          <a>active:{response.active.toString()}</a>
      </div>
    )
  }
  else
  {
    return (
      <div class="admin-group-details">
          error
      </div>
    )
  }

}
export default GroupDetails