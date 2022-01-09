import useAxios from "../../General/UseAxios";

const AdminStatistics = () => {

    const { response, error, loading } = useAxios({
        method: 'get',
        url: '/statistic',
        headers: 
        {
            Authorization: sessionStorage.getItem("token"),
        },
    }); 

    const statistics = () =>{
        if(response !== null)
        {
            return(
                <u>
                {response.map(statistic => (
                    <li>{statistic.name} :{statistic.data}</li>
                ))}
                </u>
            )
        }
        else{
            return(
                <a>error loading in</a>
            )
        }
        
    }

    return(
        <div className="admin-statistics-container">
            <div className="admin-statistics-box">
                <div className="admin-statistics-users">
                    {statistics()}
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default AdminStatistics