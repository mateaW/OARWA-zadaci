import "../App.css";

function Drzava({ onDrzavaChange }){
    const handleChange = (e) => {
    const novaDrzava = e.target.value;
    onDrzavaChange(novaDrzava); 
  };
    return(
        <div>
            <label htmlFor="drzava">Država: </label>
            <br />
            <select 
            id="drzava" 
            name="drzava" 
            onChange={handleChange}
            style={{ width: '99%'}}
            >
                <option value="Hrvatska">Hrvatska</option>
                <option value="Bosna i Hercegovina">Bosna i Hercegovina</option>
                <option value="Italija">Italija</option>
                <option value="Slovenija">Slovenija</option>
            </select>
        </div>
    )
}

export default Drzava;