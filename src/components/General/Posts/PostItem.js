import React from 'react';


  //{/*onClick={() => props.getGroupDetails(props.group.id)}*/}
const PostItem = props => {

    const picture = () =>{
        if(props.post.picture.pictureId != -1)
        {
            return(
                <div className="post_picturediv">
                    <img src={props.post.picture.url} alt={props.post.picture.name} className="post_picture" />
                </div>
            )
        }
    }

    return(
        <div className='post_item' >
            {picture()}
            <div className="post_content">
                <h1>{props.post.title}</h1>
                <a>{props.post.content}</a>
                {/*<b>{props.group.name}</b><br />
                <a>category: {props.group.category}</a><br />
                <a>is active: {props.group.active.toString()}</a>*/}
            </div>
            <hr/>
        </div>        
    )
}


export default PostItem;