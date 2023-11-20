import "../App.css";
import React, { useState } from "react";

function Uvjeti_checkbox({ onCheckboxChange }){
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prevChecked) => !prevChecked);
    onCheckboxChange(!checked);
  };
    return (
        <div className="check">
        <label>
          <input type="checkbox"
          checked={checked}
          onChange={handleChange}/>
          Prihvaćam uvjete narudžbe
        </label>
      </div>
    )
}

export default Uvjeti_checkbox;