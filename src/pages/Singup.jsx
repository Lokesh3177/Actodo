import { Link, useNavigate } from "react-router-dom"

import { useState } from "react"
import { Navigate } from "react-router-dom"

function Singup(props) {
    const username = props.user
    const Setuser = props.Setuser
    const [eusername, Seteusername] = useState()
    const [epassword, Setepassword] = useState()
    const navigate =useNavigate()


    function handlechange(event){
        Seteusername(event.target.value)

    }
    function handlepasswrod(event){
        Setepassword(event.target.value)
    }
   
    
    function handlesingup(){
        
    
    Setuser([...username,{username:eusername,password:epassword}])
    
    navigate('/')
  
    
       
    }
    return (
        <div className="bg-black p-10 my-4 ">
            <div className="bg-white p-10 rounded-md ">
                <h1 className="text-3xl font-medium">Hey hello!!</h1>
                <p>i help you mange your activites after login :)</p>
                <div className="flex flex-col gap-2 my-2">
                    <input type="text" onChange={handlechange}
                        placeholder="Enter your usename"
                        className="border border-black rounded p-1 my-2 bg-transparent w-52 " />

                    <input type="text" onChange={handlepasswrod}
                        placeholder="Enter your password"
                        className="border border-black rounded p-1 my-2 bg-transparent w-52 " />

                    <input type="text"
                        placeholder=" confirm password" 
                        className="border border-black rounded p-1 my-2 bg-transparent w-52 " />
                </div>
                <button className="bg-[#FDA300]  rounded-md p-2 w-24" onClick={handlesingup}>singup</button>
                <p>Already ypu have an Account <Link to={"/"} className="underline">Login</Link></p>

            </div >

        </div >
    )

}
export default Singup