import "../App.css"

function Logo(props){
    return (
        <div className="logo">
            <img src={props.link} alt = "slika" />
            <h3>{props.ime_kluba}</h3>
        </div>
    )
}

export default Logo