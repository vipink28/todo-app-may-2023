import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login(props) {
    const [formData, setFormData]= useState();

    const handleChange=(e)=>{
        console.log(e);
        let { name, value } = e.target;
        setFormData((prev)=>({
            ...prev,
            [name]: value
        }))
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
      <button className="btn btn-primary">Login</button>

      <p>Having Problem in registering? <Link to='/about'>click here</Link> for help </p>
    </form>
  );
}

export default Login;
