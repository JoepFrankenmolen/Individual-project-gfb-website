import React from "react"
import GroupItem from "./GroupItem"

const GroupList = props => {
  return (
    <div className="list" >
      {props.groups.map(group => (
        <GroupItem
          key={group.id}
          group={group}
          getGroupDetails={props.getGroupDetails}
        />
      ))}
    </div>
  )
}
export default GroupList