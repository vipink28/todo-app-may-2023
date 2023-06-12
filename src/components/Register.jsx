import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register(props) {
  const [formData, setFormData]= useState();

  const handleChange=(e)=>{
      console.log(e);
      let { name, value } = e.target;
      setFormData((prev)=>({
          ...prev,
          [name]: value
      }))
  }

  const submitForm=()=>{
    
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
      <button className="btn btn-primary">Register</button>    
    </form>
  );
}

export default Register;
