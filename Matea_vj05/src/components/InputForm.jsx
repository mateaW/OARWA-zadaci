import { useState, useEffect } from "react";
import axios from "axios";

function InputForm() {
  const [formData, setFormData] = useState({
    type: "",
    color: "",
    size: "",
    image: "IMAGE",
  });

  const opcije = {
    type: ['Skirt', 'T-shirt', 'Hat', 'Jacket', 'Trousers'],
    color: ['Red', 'Blue', 'Black', 'Green'],
    size: ['S', 'M', 'L']
  };

  const [wardrobe, setWardrobe] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/wardrobe/")
      .then((res) => {
        setWardrobe(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const obradiPodatke = (objekt) => {
    const nextId = wardrobe.length > 0 ? Math.max(...wardrobe.map(item => item.id)) + 1 : 1;
    return {
      id: '' + nextId,
      type: objekt.type,
      color: objekt.color,
      size: objekt.size,
      image: objekt.image,
    };
  };

  const sendData = (event) => {
    event.preventDefault();
  
    const dataToSend = obradiPodatke(formData);
  
    axios
      .post("http://localhost:3000/wardrobe", dataToSend)
      .then(() => {
        setFormData({
          type: "",
          color: "",
          size: "",
          image: "",
        });
        axios
          .get("http://localhost:3000/wardrobe/")
          .then((res) => {
            setWardrobe(res.data);
            window.location.reload();
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  };
  

  const promjenaUlaza = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={sendData}>
      <label>
        <select name="type" value={formData.type} onChange={promjenaUlaza} required>
          <option value="">TYPE</option>
          {opcije.type.map((tip, index) => (
            <option key={index} value={tip}>
              {tip}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        <select name="color" value={formData.color} onChange={promjenaUlaza} required>
          <option value="">COLOR</option>
          {opcije.color.map((boja, index) => (
            <option key={index} value={boja}>
              {boja}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        <select name="size" value={formData.size} onChange={promjenaUlaza} required>
          <option value="">SIZE</option>
          {opcije.size.map((velicina, index) => (
            <option key={index} value={velicina}>
              {velicina}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={promjenaUlaza}
          required
        />
      </label>
      <button type="submit">Save</button>
    </form>
  );
}

export default InputForm;
