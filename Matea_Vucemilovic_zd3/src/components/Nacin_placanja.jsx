import "../App.css";
import { useEffect, useState } from "react";

function Nacin_Placanja({onPlacanjeChange}){
    const [odabraniNacinPlacanja, setOdabraniNacinPlacanja] = useState(null);

    const handleChange = (e) => {
        const noviNacinPlacanja = e.target.value;
        if (odabraniNacinPlacanja === noviNacinPlacanja) {
            setOdabraniNacinPlacanja(null);
            onPlacanjeChange(null);
          } else {
            setOdabraniNacinPlacanja(noviNacinPlacanja);
            onPlacanjeChange(noviNacinPlacanja);
          }
    };
    return(
        <div>
            <label>
                <input 
                type="radio" 
                value = "Pouzeće"
                onChange={handleChange} 
                checked={odabraniNacinPlacanja === "Pouzeće"}
                name="nacinPlacanja" 
            	/>
                Pouzeće
            </label>
            <br></br>
            <label>
                <input 
                type="radio" 
                value = "Kartica"
                onChange={handleChange} 
                checked={odabraniNacinPlacanja === "Kartica"}
                name="nacinPlacanja" 
                />
                Kartica
            </label>
        </div>
    )
}

export default Nacin_Placanja;