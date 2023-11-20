import "../App.css";

function Okvir (props){
    return (
        <div>
            <p className="naziv">{props.naziv}</p>
            <div className="plavi_okvir">
                {props.children}
            </div>
        </div>
    )
}
export default Okvir;