import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";

function Register(props) {
  const [formData, setFormData]= useState();
  const { message, register, setMessage }=useContext(AuthContext);

  useEffect(()=>{
    setMessage("");
  }, [])

  const handleChange=(e)=>{
      let { name, value } = e.target;
      setFormData((prev)=>({
          ...prev,
          [name]: value
      }))
  }

  const submitForm=async(e)=>{
    e.preventDefault();
    register(formData);
  }

  return (
    <form>
      <div className="mb-3">
        <label className="form-label" htmlFor="name">
          Name
        </label>
        <input type="text" name="name" id="name" className="form-control" onChange={handleChange} />
      </div>

      <div className="mb-3">
        <label className="form-label">
          Email
        </label>
        <input type="email" name="email" className="form-control" onChange={handleChange}/>
      </div>

      <div className="mb-3">
        <label className="form-label">
          Password
        </label>
        <input type="password" name="password" className="form-control" onChange={handleChange}/>
      </div>
      <p>{message}</p>
      <button className="btn btn-primary" onClick={submitForm}>Register</button>    
    </form>
  );
}

export default Register;
