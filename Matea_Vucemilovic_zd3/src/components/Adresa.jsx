import "../App.css";
import { useState } from "react";

function Adresa({onAdresaChange}){
    const [adresa, postaviAdresu] = useState("");

    const handleChange = (e) => {
        const novaAdresa = e.target.value;
        postaviAdresu(novaAdresa);
        onAdresaChange(novaAdresa); //funkciji koju smo dobili kao prop dajemo novu adresu
    };
    return(
        <div>
            <label htmlFor="adresa">Adresa: </label>
            <br />
            <input 
                type="text" 
                id="adresa" 
                name="adresa" 
                value={adresa}
                onChange={handleChange}
                style={{ width: '95%'}}/>
        </div>
    )
}
export default Adresa;