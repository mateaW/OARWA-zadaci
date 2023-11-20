import "../App.css";
import { useState } from "react";

function Mail({ onMailChange }){
    const [mail, postaviMail] = useState("e-mail...");

    const handleChange = (e) => {
        const noviMail = e.target.value;
        postaviMail(noviMail);
        onMailChange(noviMail);
    };

    return(
        <div>
            <label htmlFor="e-mail" />          
            <input 
                type="text" 
                id="e-mail" 
                name="e-mail" 
                value={mail}  
                onChange={handleChange} 
                className="unutarnjiTekst" 
                style={{ width: '95%'}}
            />
        </div>
    )
}

export default Mail;