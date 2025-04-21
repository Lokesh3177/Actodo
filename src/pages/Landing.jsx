import Card from "../components/Card"
import Header from "../components/header"
import TodoContainer from "../components/TodoContainer"

import { useLocation } from "react-router-dom"
import TodoForm from "../components/TodoForm"
function Landing() {
    const location = useLocation()
    return (

        <div>

            <div className="bg-black p-16">
                <div className="bg-white p-10 border rounded-md">
                    <Header name={location.state.username} />
                    <div className="flex justify-between flex-wrap" >
                        <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Salem"} />
                        <Card bgcolor={"#FD6660"} title={"april"} subtitle={"15/04/2025"} />
                        <Card bgcolor={"#FCA301"} title={"using bulid"} subtitle={"React js"} />
                    </div>

                    <TodoContainer />

                </div>
            </div>

         </ div>  )
}

            export default Landing