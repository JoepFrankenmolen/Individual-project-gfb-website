import React from 'react';


  //{/*onClick={() => props.getGroupDetails(props.group.id)}*/}
const PostItem = props => {

    return(
        <div className='post_item' >
            <div className="post_picturediv">
                <img src={props.post.picture.url} className="post_picture" />
            </div>
            <div className="post_content">
                {/*<b>{props.group.name}</b><br />
                <a>category: {props.group.category}</a><br />
                <a>is active: {props.group.active.toString()}</a>*/}
            </div>
            <hr/>
        </div>        
    )
}


export default PostItem;