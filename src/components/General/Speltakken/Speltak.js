import React from "react"
import { useState,useEffect } from "react/cjs/react.development";
import PostContainer from "../Home/PostContainer";
import useAxios from "../UseAxios";
import axios from 'axios';
import { useHistory } from 'react-router-dom'

const Speltak = () => {
    const [name,setName] = useState(window.location.pathname.replace("/speltak/",""))
    const history = useHistory()
    const [oldPath, setOldPath] = useState(window.location.pathname)

    const {hasRun} = 0
    const [counter, setCounter] = useState(0)

    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchData({
            method: 'get',
            url: ('/post/group/'+name),
        });
        }, 
    []);

    const getName = path =>{
        return path.replace("/speltak/","")
    }

    async function fetchData(params)
    {
        setLoading(true);
        try {
            const res = await axios.request(params);
            setResponse(res.data);
            setError(null);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    history.listen((location) => { 
        setCounter(counter+1)
        if(counter === 2 && hasRun === 0)
        {
            hasRun = 1
            setCounter(1)
            window.location.reload(false)
        }
        else
        {
            setName(getName(window.location.pathname))
            fetchData({
                method: 'get',
                url: ('/post/group/'+name),
            });
        }
        
    }) 


    

    return(
    <PostContainer
        response={response}
        error={error}
        loading={loading}
    />    
    )

 
}
export default Speltak