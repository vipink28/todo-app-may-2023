import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login(props) {
    const [formData, setFormData]= useState();
    const [message, setMessage] = useState("");

    const handleChange=(e)=>{
        let { name, value } = e.target;
        setFormData((prev)=>({
            ...prev,
            [name]: value
        }))
    }

  const submitForm=async(e)=>{
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/users?email=${formData.email}&password=${formData.password}`, {method: "GET"});
    const user = await response.json();
    if(response.ok){
      if(user.length > 0){
        setMessage("Logged in Successfully");
        console.log(user[0]);
        const userData = JSON.stringify(user[0]);
        localStorage.setItem("user", userData);
        // redirection
      }else{
        setMessage("Email/Password not correct");
      }
    }else{
      setMessage("Something went wrong, please try again.")
    }
  }

  return (
    <form>
      <div className="mb-3">
        <label className="form-label" htmlFor="">
          Email
        </label>
        <input type="email" name="email" className="form-control" onChange={handleChange} />
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="">
          Password
        </label>
        <input type="password" name="password" className="form-control" onChange={handleChange}/>
      </div>
      <p>{message}</p>
      <button className="btn btn-primary" onClick={submitForm}>Login</button>

      <p>Having Problem in registering? <Link to='/about'>click here</Link> for help </p>
    </form>
  );
}

export default Login;
