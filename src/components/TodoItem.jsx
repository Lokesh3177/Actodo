function TodoItem(props) {
  const Lists = props.Lists;
  const setlistArr = props.setlists;

  function handleDelete(deleteid) {
    const temparr = Lists.filter(function(item) {
      if (item.id === deleteid) {
        return false;
      } else {
        return true;
      }
    });
    setlistArr(temparr);
  }
  

  return (
    <div className="flex justify-between">
      <p>{props.index + 1}. {props.activity}</p>
      <button onClick={() => handleDelete(props.id)} className="text-red-400">Delete</button>
    </div>
  );


}




export default TodoItem