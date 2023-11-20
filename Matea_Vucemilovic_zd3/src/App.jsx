import { useEffect, useState } from "react";
import "./App.css";
import Okvir from "./components/Okvir";
import Naruci from "./components/Naruci";
import Mail from "./components/Mail";
import Uvjeti_checkbox from "./components/Uvjeti_checkbox";
import Adresa from "./components/Adresa";
import Drzava from "./components/Drzava";
import Ime from "./components/Ime";
import Nacin_Placanja from "./components/Nacin_placanja";
 
function App() {
  const [mail, setMail] = useState("");
  const [ime, setIme] = useState("");
  const [drzava, setOdabranaDrzava] = useState("");
  const [adresa, setAdresa] = useState("");
  const [placanje, setNacinPlacanja] = useState("");
  const [uvjeti, setUvjeti] = useState("");

  const [ispis, setIpis] = useState("");

  const handleMailChange = (noviMail) => {
    setMail(noviMail);
  };

  const handleImeChange = (novoIme) => {
    setIme(novoIme);
  }
  
  const handleDrzavaChange = (novaDrzava) => {
    setOdabranaDrzava(novaDrzava);
  };

  const handleAdresaChange = (novaAdresa) => {
    setAdresa(novaAdresa);
  }

  const handleNacinPlacanja = (noviNacinPLacanja) => {
    setNacinPlacanja(noviNacinPLacanja);
  }

  const handleUvjeti = (noviUvjeti) => {
    setUvjeti(noviUvjeti);
  }

  const handleIspis = () => {
    if (!mail || !ime || !adresa || !placanje || !uvjeti) {
      setIpis("Molimo unesite sve potrebne informacije.");
    } 
    else if (mail && ime && !drzava && adresa && placanje && uvjeti) //ovo sam napravila jer mi nesto za drzavom ne radi kad se ne stisne
    {
      if (placanje == "Kartica")
      {
        setIpis(
          <div>
            {ime}, {mail}<br />
            {adresa}, Hrvatska<br />
            plaćanje karticom   
          </div>
        );
      }
      else
      {
        setIpis(
          <div>
            {ime}, {mail}<br />
            {adresa}, Hrvatska<br />
            plaćanje pouzećem
          </div>
        );
      }
    }
    else 
    {
      if (placanje == "Kartica")
      {
        setIpis(
          <div>
            {ime}, {mail}<br />
            {adresa}, {drzava}<br />
            plaćanje karticom   
          </div>
        );
      }
      else
      {
        setIpis(
          <div>
            {ime}, {mail}<br />
            {adresa}, {drzava}<br />
            plaćanje pouzećem
          </div>
        );
      }
    }
  }

  return (
    <div className="glavni">
    <div className="info">    
        <Okvir naziv="Kontakt">
          <Mail onMailChange={handleMailChange} />
        </Okvir>
        <Okvir naziv="Adresa">
          <Ime onImeChange={handleImeChange}/>
          <Drzava onDrzavaChange={handleDrzavaChange}/>
          <Adresa onAdresaChange={handleAdresaChange}/>
        </Okvir>
        <Okvir naziv="Način plaćanja">
          <Nacin_Placanja onPlacanjeChange={handleNacinPlacanja}/>
        </Okvir>
        <Uvjeti_checkbox onCheckboxChange={handleUvjeti}/>
        <Naruci onClick={handleIspis}/>
    </div>
    <div className="ispis">
        <p>{ispis}</p>
    </div>
    </div>
  );
}
 
export default App;