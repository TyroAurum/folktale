import React from "react";
import './back.css'
import { Form, Input } from "reactstrap";
import TitleBar from "../component/Titlebar";
import { useState } from "react";

const Login = ()=>{

    const[user,setUser] = useState({email:"",password:""})
    var name,value;



    const handleChange = (e)=>{
        name = e.target.name;
        value = e.target.value;
        setUser({...user,[name]:value})       
    }


    return (
        <>
        <TitleBar />
            <div className="login-section">
                <div className="area">
                    <ul className="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            <div className="inner-container">
            <div className="login-box">
                <h3 id="input-box-title">LOG IN</h3>
                <Form method="POST" action="http://localhost:8000/login">
                    <Input className="box-input" name="email" value={user.email} type="email" placeholder="E-mail" onChange={handleChange} />
                    <Input className="box-input" name="password" value={user.password} type="password" placeholder="Password" onChange={handleChange}/>
                    <div id="submit-btn">
                    <Input className="box-input" type="Submit" />
                    </div>
                </Form>
            </div>
            </div>
            </div>
        </>
    )
}

export default Login;