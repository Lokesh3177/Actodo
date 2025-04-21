import Todoform from "./TodoForm"
import TodoList from "./TodoList";

import { useState } from "react"

function TodoContainer() {
    const [Lists, setlists] = useState([
        {

            id: 1,
            activity: "go to walk"
        },
        {
            id: 2,
            activity: "have a breakfast"

        },
        {
            id: 3,
            activity: "Go to office"
        },
       
    ])

    return (
        <div>
            <div className="flex gap-7 flex-wrap">

                <Todoform Lists={Lists} setlists={setlists} />
                <TodoList Lists={Lists} setlists={setlists} />

            </div>
        </div>
    )

}
export default TodoContainer