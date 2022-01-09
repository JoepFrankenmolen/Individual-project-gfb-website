import {useHistory} from "react-router-dom"


const AdminOptions = () => {

    const history = useHistory();
    const redirect = (link) =>
    {
        history.push(link); 
    }

    return(
        <div className="admin-options-container">
            <div className="admin-options-box">
                <div className="admin-options-item" onClick={() => redirect("/admin/groups")}>
                    <h1>groups</h1>
                    <h1 className="admin-options-carret">{'>'}</h1>
                </div>
                <div className="admin-options-item"  onClick={() => redirect("/admin/users")}>
                    <h1>users</h1>
                    <h1 className="admin-options-carret">{'>'}</h1>
                </div>
            </div>
        </div>
    )
}

export default AdminOptions