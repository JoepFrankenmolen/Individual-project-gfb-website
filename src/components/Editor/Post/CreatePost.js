import React, {useState} from "react"
import {useHistory } from "react-router-dom"
import axios from "axios";
import useAxios from "./../../General/UseAxios"
import ShowEditorPosts from "./ShowEditorPosts"

const CreatePost = () => {

    const history = useHistory();
    const [once,setOnce] = useState(false);

    const [errorGroup, setErrorGroup] = useState("");
    const [errorPicture, setErrorPicture] = useState("");
    const [errorTitle, setErrorTitle] = useState("");
    const [errorContent, setErrorContent] = useState("");


    const [pictureResponse, setpictureResponse] = useState(null);
    const [pictureError, setpictureError] = useState(null);
    const [pictureLoading, setpictureLoading] = useState(false);

    const [createResponse, setResponse] = useState(null);
    const [createError, setError] = useState(null);
    const [createLoading, setLoading] = useState(false);

    //the groups the user can chose from to start
    const { response, error, loading } = useAxios({
        method: 'get',
        url: '/group/null/null',
        headers: {
            Authorization: sessionStorage.getItem("token"),
        },
    });

    const errorStyle = {
        color:"red"
    } 

    const [postDetails,setPostDetials] = useState({
        groupId:"-1",
        picture :null,
        title :"test",
        content :"ylkj;adjfadaddafkladfdfjkl;adfjkldfaklakfkjadfkljadfdfjkl;adfjkldfaklakfkjadfkljadfdfjkl;adfjkldfaklakfkjadfkljadfdfjkl;adfjkldfaklakfkjadfkljadfjkl;adfjkldfaklakfkjadfkljadflkjl;kjfadsjkladjfkl;l;kjadflk;jadfjl;kadsjk;lk;jafdskj;dfskj;lafdsjk;lakjl;fdkjl;dfskl;fdskj;lasfdkj;lakfs;dkjl;safdk;jladfsjkafsdkl;jlkajfsd"
    });

    const goBack = () =>{
        if(sessionStorage.getItem("token") === null && once === false)
        {
            setOnce(true)
            history.goBack()
        }
    }
    
    const onChange = e => {
        setPostDetials({
            ...postDetails,
            [e.target.name]: e.target.value,
        })
    }

    const onPictureChange = (e) =>{
        setPostDetials({
            ...postDetails,
            [e.target.name]: e.target.files[0],
        })
      }

    const selectGroup = () =>{
        if(response === null && error === null && loading ===false)
        {
            return(
                <div className="options-form-response">
                    <a> </a>
                </div>
            )
        }

        if(error != null)
        {
            return(
                <div className="options-form-response">
                    <a>failed to get groups</a>
                </div>
            )
        }
        else if(loading)
        {
            return(
                <div className="options-form-response">
                    <a>prossesing groups</a>
                </div>
            )
        }
        else if(response !== null)
        { 
            return(
                <select name="groupId" value={postDetails.groupId} onChange={onChange} className='options-from-select'>
                    <option value="-1">select group:</option>
                    {response.map((group) =>(
                        
                        <option value={group.id}>{group.name}</option>                 
                    ))}
                </select>
            )
        }
    }

    const axiosDataResponse = () =>{
        if(createResponse === null && createError === null && createLoading ===false)
        {
            return(
                <div className="axios-response">
                    <a></a>
                </div>
            )
        }

        if(createError != null)
        {
            return(
                <div className="axios-response">
                    <a>error creating post</a>
                </div>
            )
        }
        else if(createLoading)
        {
            return(
                <div className="axios-response">
                    <a>processing post</a>
                </div>
                
            )
        }
        else if(createResponse !== null)
        { 
            return(
                <div className="axios-response">
                    <a>creating the post sucseeded</a>
                </div>
            )
        }
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

    async function countdown(){
        // for (let i = 3; i > 0; i--) {
        //     setCount(i)
        //     await sleep(3000);
        //     console.log("test")
        // }
        // props.handleClose()
        await sleep(500);
        window.location.reload(false);
    }


    async function createPicture()
    {
        

        
    }

    async function createPost(event){
        event.preventDefault();

        if(postDetails.groupId === "-1" )
        {
            setErrorGroup("*select a group")
        }

        if(postDetails.picture === null)
        {
            setErrorPicture("*select a picture")
        }

        if(postDetails.title === "")
        {
            setErrorTitle("*enter a title")
        }

        if(postDetails.content ===  ""|| postDetails.content.length <= 250)
        {
            setErrorContent("*Enter Content of atleast 250 chars")
        }

        // if(postDetails.content !== "" && postDetails.title !== "" && postDetails.groupId !== "-1")
        // {
        //     // var params = {
        //     //     email:userCredentials.email,
        //     //     password:userCredentials.password,
        //     // }
            
        //     setResponse(null)
        //     setError(null)
        //     setLoading(null)
        //     // fetchData(params);
        // }

        if(postDetails.content !==  "" || postDetails.content.length >= 250)
        {
            if(postDetails.title !== "" &&  postDetails.picture !== null && postDetails.groupId !== "-1" )
            {
                const formData = new FormData();
                formData.append('file',postDetails.picture)
                const params = {
                    method: 'post',
                    url: '/picture',
                    headers: 
                    {
                        "Content-Type":'multipart/form-data',
                        Authorization: sessionStorage.getItem("token"),
                    },
                    data:formData
                }
                
                setpictureLoading(true);
                try {
                    const res = await axios.request(params);
                    setpictureResponse(res.data);
                    setpictureError(null);
                } catch (err) {
                    setpictureError(err);
                } finally {
                    setpictureLoading(false);
                }

                if(pictureResponse !== null && pictureResponse !== null)
                {
                    const params = {
                        method: 'post',
                        url: '/post',
                        headers: 
                        {
                            Authorization: sessionStorage.getItem("token"),
                        },
                        data: 
                        {
                            authorId: sessionStorage.getItem("userId"),
                            groupId: postDetails.groupId,
                            pictureId: pictureResponse.pictureId,
                            title:postDetails.title,
                            content:postDetails.content
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
                        await sleep(500)
                        window.location.reload(false)
                    }
                }
                
            }
        }
    }

    return(
        <div className="createpost-container">
            {goBack()}
            <div className="createpost-box">
                <form onSubmit={createPost} className="createpost-form">
                    <label for="groups" className='options-form-label'>Chose a group:</label>
                    {selectGroup()}
                    <p className="error-createpost">{errorGroup}</p><br/>

                    <label htmlFor="name" className="createpost-label">picture:</label>
                    <input 
                        type="file" 
                        className="createpost-file" 
                        name="picture" 
                        onChange={onPictureChange}
                    />
                    <p className="error-createpost">{errorPicture}</p><br/>

                    <label htmlFor="title" className="createpost-label">title:</label>
                    <input 
                        type="text" 
                        className="createpost-text" 
                        value={postDetails.title}
                        name="title" 
                        placeholder="Title.."
                        onChange={onChange}
                    />
                    <p className="error-createpost">{errorTitle}</p><br/>

                    <label htmlFor="content" className="createpost-label">content:</label>
                    <textarea  
                        type="text-area" 
                        className="createpost-text" 
                        value={postDetails.content}
                        name="content" 
                        placeholder="Content.."
                        onChange={onChange}
                    />
                    <p className="error-createpost">{errorContent}</p><br/>

                    <div className="axios-response" style={error !=null ? errorStyle : null}>
                        {axiosDataResponse()}
                    </div>
                        
                    <div className="submit">
                        <input type="submit"className="createpost-form-submit" value="register"/>
                    </div>
                </form> 
            </div>
            <ShowEditorPosts/>
        </div>
    )


}

export default CreatePost