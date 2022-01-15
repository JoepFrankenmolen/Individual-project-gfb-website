import React from 'react';
import DropdownItem from './DropdownItem';

const Dropdown = (props) => 
{
    return (
        <div className='navigation-dropdown'>
            {props.navItems.map((item)=>(
                <DropdownItem
                    item={item}
                />
            ))}
        </div>
    )
}

export default Dropdown