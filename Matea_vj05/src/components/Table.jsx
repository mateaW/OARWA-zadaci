import TableRow from "./TableRow";

function Table({ wardrobe, deleteRow}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Color</th>
          <th>Size</th>
          <th>Image</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        {wardrobe.map(w => (
          <TableRow key={w.id} war={w} deleteRow={deleteRow}/>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
