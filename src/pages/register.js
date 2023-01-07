import React, { useState } from "react";
import { Form, FormGroup, Input } from "reactstrap";
import './register.css'
import './back.css'
import TitleBar from "../component/Titlebar";

const RegisterFm = ()=>{
    const[user,setUser] = useState({name:"",email:"",gender:"",password:""})
    var name,value;



    const handleChange = (e)=>{
        name = e.target.name;
        value = e.target.value;
        setUser({...user,[name]:value})
        console.log(user);        
    }

    // const handleSubmit =async (e)=>{
    //     e.preventDefault();
    //     console.log(user);
    //     const {name, email, gender, password } = user;

    //     var res = await fetch('/register',{
    //         method:"POST",
    //         headers:{ "Content-Type":"application/json" },
    //         body:JSON.stringify({name,email,gender,password})
    //     }).then(function(response){
    //         console.log(response);
    //         return response.json();
    //     })
    //     //const data = res.json();
    //     //console.log(data);
    //     //return res;
    // }

    return(
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
                <h3 id="input-box-title">Register</h3>
                <Form method="POST" action="http://localhost:8000/register">
                    <Input className="box-input" name="name" value={user.name} type="textbox" placeholder="Username" onChange={handleChange} />
                    <Input className="box-input" name="email" value={user.email} type="email" placeholder="E-mail" onChange={handleChange} />
                    <Input className="box-input" name="password" value={user.password} type="password" placeholder="Password" onChange={handleChange}/>
                    <FormGroup className="radio-btns" onChange={handleChange}  autoComplete='true'>
                        <legend>Gender</legend>
                        <FormGroup check='true' >
                            <Input name="gender" type="radio" value="Male"/>
                            <label check>Male</label>
                        </FormGroup>
                        <FormGroup check='true'>
                            <Input name="gender" type="radio" value="Female"/>
                            <label check>Female</label>
                        </FormGroup>
                        <FormGroup check='true'>
                            <Input name="gender" type="radio" value="Others" />
                            <label check>Others</label>
                        </FormGroup>
                    </FormGroup>
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

export default RegisterFm;