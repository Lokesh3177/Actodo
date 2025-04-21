import { useState } from "react";

function TodoForm(props) {
    const Lists=props.Lists
    const setlists=props.setlists

    const [NewLists, setNewlists] = useState("");

    function handleChange(event) {
        setNewlists(event.target.value);
    }

    function handleAdd() {
        setlists([...Lists, { id: Lists.length + 1, activity: NewLists }]);
        setNewlists(""); 
    }

    return (
        <div>
            <p className="text-2xl font-medium" >Manage Activities</p>
            <input
                value={NewLists}
                onChange={handleChange}
                placeholder="Enter your next activity..."
                className="p-1 border rounded border-black"
            />
            <button onClick={handleAdd} className="bg-black text-white p-1 border border-black">
                Add
            </button>
        </div>
    );
}

export default TodoForm;
