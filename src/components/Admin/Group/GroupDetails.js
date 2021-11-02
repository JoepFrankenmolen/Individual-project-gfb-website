import React from "react"
import GroupItem from "./GroupItem"

const GroupDetails = props => {

  if(props.group == null)
  {
    return null
  }
  else
  {
    return (
      <div class="details">
          <h1> {props.group.id}</h1>
          test
      </div>
    )
  }

  
}
export default GroupDetails