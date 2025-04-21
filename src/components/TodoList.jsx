import { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList(props) {
    const Lists = props.Lists;
    const setlists = props.setlists;


    return (
        <div className="bg-[#8272DA] flex-grow p-3 border rounded">
            <p className="font-medium text-3xl">Today's Activities</p>
            {Lists.length === 0 ? <p>Nothing</p> : ""}
            {Lists.map((item, index) => (
                <TodoItem id={item.id} activity={item.activity} index={index} Lists={Lists} setlists={setlists} />
            ))}

        </div>
    );
}

export default TodoList;
