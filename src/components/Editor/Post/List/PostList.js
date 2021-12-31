import React from "react"
import PostItem from "./PostItem"
import useAxios from "../../../General/UseAxios"

const PostList = () => {
    //the groups the user can chose from to start
    const { response, error, loading } = useAxios({
        method: 'get',
        url: '/post/author/' + sessionStorage.getItem("userId"),
        headers: {
            Authorization: sessionStorage.getItem("token"),
        },
    });

    if(response !== undefined && response !== null && response !== "null")
    {
        return (
            <div className="editor-post-container-box" >
                {response.map(post => (
                <PostItem
                    key={post.id}
                    post={post}
                />
                ))}
            </div>
        )
    }
    else{
        return(
            <a>error</a>
        )
    }
}
export default PostList