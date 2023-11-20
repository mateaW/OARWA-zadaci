import "../App.css";

function Ispis({ mail, ime, drzava, adresa }){
    
    return(
        <div>
            <p>{mail}</p>
            <p>{ime}</p>
            <p>{drzava}</p>
            <p>{adresa}</p>
        </div>
    )
}

export default Ispis;