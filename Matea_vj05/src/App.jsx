import "./App.css"
import axios from "axios";
import { useState, useEffect } from "react";
import Table from "./components/Table";
import InputForm from "./components/InputForm";

function App() {

    const [wardrobe, setWardrobe] = useState([]);
 
    useEffect(() => {
      axios
        .get("http://localhost:3000/wardrobe/")
        .then(res => setWardrobe(res.data));
    }, []);

    const fetchWardrobeData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/wardrobe/");
        setWardrobe(response.data);
      } catch (error) {
        console.error("Error fetching wardrobe data:", error);
      }
    };

    const deleteRow = async (idToDelete) => {
      try {
        await axios.delete(`http://localhost:3000/wardrobe/${idToDelete}`);
        fetchWardrobeData();
      } catch (error) {
        console.error('Error deleting item:', error);
      }
    };
    
    return (
      <div className='app'>
      <div className="table">
        <h2>MY WARDROBE</h2>
        <Table wardrobe={wardrobe} deleteRow={deleteRow}/>
        </div>
        <div className="form">
        <h2>ADD NEW ITEM</h2>
        <InputForm dodaj={setWardrobe} wardrobe={wardrobe} setWardrobe={setWardrobe}/>
        </div>
      </div>
    );
  
}

export default App
