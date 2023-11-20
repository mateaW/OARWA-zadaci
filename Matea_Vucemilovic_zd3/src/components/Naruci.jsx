import "../App.css";

function Naruci({ onClick }) {
  return (
    <div>
      <button className="botun" onClick={onClick}>
        Naruči
      </button>
    </div>
  );
}

export default Naruci;