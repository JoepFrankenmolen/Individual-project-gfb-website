import React, {useState} from "react"
import {useHistory } from "react-router-dom"
import axios from "axios";
import useAxios from "../../General/UseAxios"

const CreatePost = () => {

    const history = useHistory();
    

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
        content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque facilisis justo, ut vulputate odio gravida quis. Mauris quis vulputate purus. Vestibulum commodo odio rutrum lacus gravida, in mattis tellus tristique. Nunc laoreet euismod augue et eleifend. Suspendisse condimentum cursus sem, sed finibus augue blandit iaculis. In semper finibus dolor ac ullamcorper. Donec scelerisque lobortis blandit. Donec congue tortor neque, id scelerisque metus hendrerit at. Morbi tincidunt, ex eu commodo tempor, urna ipsum feugiat elit, et varius eros purus semper sapien. Phasellus tempor augue pharetra urna venenatis, sit amet cursus nibh auctor. Aliquam erat volutpat. Quisque eu odio nec risus feugiat elementum non vitae sem. Curabitur vel quam a nibh porta ultrices ut vel metus. Sed vestibulum metus ac sagittis interdum In elementum at erat id lacinia. Morbi tristique mauris ipsum, id pellentesque arcu sagittis in. Phasellus maximus, massa vel mattis feugiat, libero tortor congue justo, eu faucibus tortor odio eget urna. Proin mollis risus quis dolor auctor eleifend. Etiam quis hendrerit ipsum, a interdum risus. Suspendisse luctus hendrerit ligula et ornare. Phasellus at auctor ligula, vel aliquam quam. Praesent elementum tortor libero, eget vestibulum nulla eleifend quis. Aenean convallis, est eget consequat molestie, felis quam malesuada ipsum, et tincidunt est justo nec ante. Etiam sollicitudin, magna a fermentum ultricies, nisl sapien malesuada enim, volutpat ultricies diam lacus eget lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc nulla nisi, pretium et mauris et, egestas hendrerit nisl. Aenean fermentum, nunc vel laoreet dignissim, enim lectus eleifend erat, dictum blandit diam augue ullamcorper massa. Phasellus volutpat gravida imperdiet. Pellentesque sit amet nisl at est pretium commodo. Quisque venenatis erat in ultricies posuere. In sollicitudin sed dui et gravida. Curabitur est magna, semper sed metus at, vestibulum hendrerit urna. Fusce vel iaculis libero. Pellentesque sollicitudin malesuada pharetra. Proin metus nisi, auctor in turpis sit amet, pharetra elementum sapien. Sed vel ligula risus. Ut ante nulla, tempus id ultricies non, interdum non eros. Nam venenatis sodales iaculis. In ac scelerisque elit, id ullamcorper nisi. Sed gravida ut metus id tristique. Cras semper feugiat diam convallis sollicitudin.In eu vestibulum tellus. Cras nec eros lacus. Donec blandit nunc quis eros porta blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum non arcu eu enim rhoncus ultricies. Mauris posuere turpis massa, at imperdiet lectus viverra nec. Etiam et rutrum lectus. Maecenas ac pharetra ante. Donec dapibus lectus eget ipsum aliquam, ut aliquet est volutpat. In hac habitasse platea dictumst. Sed molestie, odio quis lobortis vestibulum, ex massa tempus felis, ac ultrices lacus est ac nisi.In tincidunt velit quis dui egestas tempus. Nulla tincidunt egestas convallis. Morbi sed convallis nibh, id euismod metus. Praesent sagittis pharetra efficitur. Phasellus luctus ultrices diam vitae rhoncus. Vivamus sollicitudin suscipit sollicitudin. Cras et maximus nunc, non commodo ex. Nullam viverra mauris sed diam placerat, sit amet consequat risus mattis. Proin luctus arcu ac diam vehicula tincidunt. Donec lectus mauris, porta nec elit eu, congue tristique nulla. Duis enim mi, luctus non tortor id, mollis dapibus ante. Mauris pharetra turpis libero, a ornare magna finibus id. Vivamus vel dui vehicula, ullamcorper nibh vitae, bibendum nulla. Fusce quis lacinia arcu, vel hendrerit turpis. Mauris vehicula quam egestas, placerat purus ut, bibendum nibh. "
    });
    
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

    // function sleep(ms) {
    //     return new Promise(resolve => setTimeout(resolve, ms));
    // }
    async function uploadPicture()
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
            uploadPost(res)
        } catch (err) {
            setpictureError(err);
            return false
        } finally {
            setpictureLoading(false);
            return true
        }
    }

    async function uploadPost(res)
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
                pictureId: res.data.pictureId,
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
            window.location.reload(false)
        }
    }

    async function createPost(event){
        event.preventDefault();

        if(postDetails.groupId === "-1" )
        {
            setErrorGroup("*select a group")
        }
        else{
            setErrorGroup("")
        }

        if(postDetails.picture === null)
        {
            setErrorPicture("*select a picture")
        }
        else{
            setErrorPicture("")
        }

        if(postDetails.title === "")
        {
            setErrorTitle("*enter a title")
        }
        else{
            setErrorTitle("")
        }

        if(postDetails.content ===  ""|| postDetails.content.length <= 250)
        {
            setErrorContent("*Enter Content of atleast 250 chars")
        }
        else{
            setErrorContent("")
        }

        if(postDetails.content !==  "" || postDetails.content.length >= 250)
        {
            if(postDetails.title !== "" &&  postDetails.picture !== null && postDetails.groupId !== "-1" )
            {
                uploadPicture()
            }
        }
    }

    return(
        <div className="createpost-container">
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
        </div>
    )


}

export default CreatePost