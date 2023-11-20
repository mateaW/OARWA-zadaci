import { useState, useEffect } from "react"
import "../App.css"

function Vrijeme(props) {
    const [minute, postaviBroj1] = useState(90);
    const [sekunde, postaviBroj2] = useState(0);
    const [pokrenuto, postaviPokrenuto] = useState(false);

    useEffect(() => {
        let intervalId;

        if (pokrenuto && (minute > 0 || sekunde > 0)) {
            intervalId = setInterval(() => {
                if (sekunde > 0) {
                    postaviBroj2(sekunde - 1);
                } else if (minute > 0) {
                    postaviBroj1(minute - 1);
                    postaviBroj2(59);
                }
            }, 1000);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [pokrenuto, minute, sekunde]);

    return (
        <div className="vrijeme">
            <p>{props.minute}:{sekunde}</p>
            {pokrenuto ? (
                <button onClick={() => postaviPokrenuto(false)} className="botun">Pauziraj</button>
            ) : (
                <button onClick={() => postaviPokrenuto(true)} className="botun">Započni utakmicu</button>
            )}
        </div>
    )
}

export default Vrijeme;