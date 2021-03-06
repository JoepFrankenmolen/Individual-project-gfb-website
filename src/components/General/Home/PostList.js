import React from "react"
import PostItem from "./PostItem"

const PostList = props => {
  if(props !== undefined)
  {
    return (
          <div className="post-container" >
            {props.posts.map(post => (
              <PostItem
                key={post.id}
                post={post}
              />
            ))}
          </div>
      )
  }
 
}
export default PostList