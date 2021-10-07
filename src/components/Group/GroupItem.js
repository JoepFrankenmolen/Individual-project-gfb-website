import React from 'react';
import styles from "./GroupItem.module.css"


  
const GroupItem = props => {
    return(
        <li className={styles.item}>
            <p>{props.group.name}</p>
            <p>{props.group.category}</p>
        </li>
    )
}


export default GroupItem;