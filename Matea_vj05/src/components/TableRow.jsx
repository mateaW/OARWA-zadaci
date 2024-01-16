
function TableRow(props) {

    const deleteItem = () => {
      console.log(props.war.id);
        const confirmed = window.confirm('Are you sure you want to delete this item?');
        if (confirmed) {
          props.deleteRow(props.war.id);
        }
      };

  return (
    <tr>
      <td>{props.war.type}</td>
      <td>{props.war.color}</td>
      <td>{props.war.size}</td>
      <td><a href={props.war.image}></a></td>
      <td>
        <button onClick={deleteItem}>DELETE</button>
      </td>
    </tr>
  );
}

export default TableRow;
