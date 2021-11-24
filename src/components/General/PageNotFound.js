import './../../css/pageNotFound.css'


function pageNotFound(props) {

  
  if(props.code != null)
  {
    return(
      <div className="main">
      <h1>error {props.code}</h1>
      <a>{props.message}</a>
    </div>
    )
  }

  return (
    <div className="main">
      <h1>error 404</h1>
      <a>page doesn't exsists yet</a>
    </div>
  );
}

export default pageNotFound;