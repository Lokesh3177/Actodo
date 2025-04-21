import { Link } from "react-router-dom";
import { useState } from "react";
import Landing from "./Landing"; 

import { useNavigate } from "react-router-dom";

function Login(props) {

    const [eusername, Seteusername] = useState()
    const [epassword, Setepassword] = useState()
    const username=props.user
    
    const[ruser, Setruser] = useState(true)
    const navigate=useNavigate()
   
  
    function handlechange(event) {
        Seteusername(event.target.value)

    }
    function handlepassword(event) {
        Setepassword(event.target.value)
    }
   
    function loginbutton() {
        var userfound = false
        username.forEach(function (item) {
            if (item.username === eusername && item.password === epassword) {
                console.log("login success")
                userfound = true
            navigate('/landing', {state: {username: eusername}})

            }
           
        })
        if(userfound===false){
            console.log("Please Singup Before Login")
            console.log(username)
            Setruser(false)
            
        }
      

    }
    return (
        <div className="bg-black p-10 my-4">
            <div className="bg-white p-10 rounded-md">
                <h1 className="text-3xl font-medium">Hey hello!!</h1>
               {ruser ?  <p>i help you mange your activites after login :)</p> : <p className="text-red-500">Please Singup Before Login</p>}
                <div className="flex flex-col gap-2 my-2">
                    <input type="text" name="" id="" placeholder="enter your usename" className="w-54 border border-black rounded-md p-1 my-1" onChange={handlechange} />
                    <input type="text" name="" id="" placeholder="enter your Password" className="w-54 border border-black rounded-md p-1 my-1" onChange={handlepassword} />
                    <button className="bg-blue-500 p-2 w-24  border-black rounded-md" onClick={loginbutton}>Login</button>
                    <p>You dont have Account <Link to={'/Singup'} className="underline">Singup</Link></p>
    
                </div>
            </div>
        </div>
    )  
}
 


export default Login








