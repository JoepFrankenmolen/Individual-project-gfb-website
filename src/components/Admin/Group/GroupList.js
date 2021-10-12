import React from "react"
import GroupItem from "./GroupItem"

const GroupList = props => {
  return (
    <ul>
      {props.groups.map(group => (
        <GroupItem
          key={group.id}
          group={group}
        />
      ))}
    </ul>
  )
}
export default GroupList