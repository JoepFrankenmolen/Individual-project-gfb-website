import React from 'react';
import styles from "./GroupItem.module.css"


  
const GroupItem = props => {
    return(
        <div class="groupitem">
            <li className={styles.item} >
                <b>{props.group.name}</b><br />
                <a>category: {props.group.category}</a><br />
                <a>is active: {props.group.active.toString()}</a>
            </li>
        </div>
        
    )
}


export default GroupItem;