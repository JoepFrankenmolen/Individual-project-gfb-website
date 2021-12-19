import useAxios from "./../../General/UseAxios"
import {useHistory } from "react-router-dom"
import axios from "axios";
import React, {useState} from "react"

const ShowEditorPosts = () =>
{
    const [createResponse, setResponse] = useState(null);
    const [createError, setError] = useState(null);
    const [createLoading, setLoading] = useState(false);

    const history = useHistory();

    //the groups the user can chose from to start
    const { response, error, loading } = useAxios({
        method: 'get',
        url: '/post/author/' + sessionStorage.getItem("userId"),
        headers: {
            Authorization: sessionStorage.getItem("token"),
        },
    });

    function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function toggleActivation(id)
    {
        const params = {
            method: 'put',
            url: '/post/publish/' + id,
            headers: 
            {
                Authorization: sessionStorage.getItem("token"),
            },
        }
        
        setLoading(true);
        try {
            const res = await axios.request(params);
            setResponse(res.data);
            setError(null);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
            window.location.reload(false);
        }
    }

    const axiosDataResponse = () =>
    {
        if(response !== null)
        {
            return(
                <div className="showpost-box">
                    {response.map((posts) =>(
                        <div>
                            <a>{posts.title}</a>
                            <a> published:{posts.active.toString()}</a>
                            <button onClick={() => toggleActivation(posts.postId)}>publish</button>
                        </div>              
                    ))}
                </div>
            )
        }
        else{
            return(
                <div>no posts</div>
            )
        }
    }
    
    return(
        <div>
            {axiosDataResponse()}
        </div>
        
    )
    
}

export default ShowEditorPosts