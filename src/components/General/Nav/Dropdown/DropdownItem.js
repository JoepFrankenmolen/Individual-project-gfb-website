import {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom"
import {FaCaretDown} from "react-icons/fa"

const DropdownItem = props => 
{
    const history = useHistory();
    const[Width, setWidth] = useState(200)

    const redirect = (link) =>
    {
        history.push(link); 
    }

    useEffect(() => {
        var temp =  document.getElementById(props.item.id).clientWidth
        console.log(temp)
        temp = temp + 50
        console.log(temp)
        setWidth(temp)
        // console.log(width)
        // console.log(document.getElementById(props.item.id).clientWidth)
      }, []);


    return (
        <div id={props.item.id} className='dropdown-item'>
            <div class="dropdown-button"  onClick={() => redirect(props.item.route)}>
                <a className='dropdown-content-text dropdown-content-text-button'>{props.item.title}</a>
                <FaCaretDown className='dropdown-caret' />
            </div>
            <div className="dropdown-content" style={{width: Width }}>
                <a onClick={() => redirect(props.item.route)} className='dropdown-content-text dropdown-content-text-down'>{props.item.title}</a>
                {props.item.subPages.map((page)=>(
                    <a  className='dropdown-content-text dropdown-content-text-down' onClick={() => redirect(page.route)}>{page.title}</a>
                ))}
            </div>
        </div>
    )
}

export default DropdownItem