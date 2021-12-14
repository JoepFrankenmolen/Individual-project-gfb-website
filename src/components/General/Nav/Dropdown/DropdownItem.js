import React from 'react';
import {useHistory} from "react-router-dom"
import {FaCaretDown} from "react-icons/fa"

const DropdownItem = props => 
{
    const history = useHistory();
    
    const redirect = (link) =>
    {
        history.push(link); 
    }


    return (
        <div className='dropdown-item'>
            <div class="dropdown-button" onClick={() => redirect(props.item.route)}>
                <a className='dropdown-content-text dropdown-content-text-button'>{props.item.title}</a>
                <FaCaretDown className='dropdown-caret' />
            </div>
            <div class="dropdown-content">
                <a onClick={() => redirect(props.item.route)} className='dropdown-content-text dropdown-content-text-down'>{props.item.title}</a>
                {props.item.subPages.map((page)=>(
                    <a  className='dropdown-content-text dropdown-content-text-down' onClick={() => redirect(page.route)}>{page.title}</a>
                ))}
            </div>
        </div>
    )
}

export default DropdownItem