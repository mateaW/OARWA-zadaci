import "../App.css";
import { useState } from "react";

function Ime({onImeChange}){
    const [ime, postaviIme] = useState("");

    const handleChange = (e) => {
        const novoIme = e.target.value;
        postaviIme(novoIme);
        onImeChange(novoIme);
    };
    return(
        <div>
            <label htmlFor="ime">Ime: </label>
            <br></br>
            <input 
                type="text" 
                id="ime" 
                name="ime" 
                value={ime}
                onChange={handleChange}
                style={{ width: '95%'}}/>
        </div>
    )
}

export default Ime;