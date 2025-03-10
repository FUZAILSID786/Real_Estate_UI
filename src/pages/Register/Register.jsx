import axios from "axios";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import apiRequest from "../../lib/apiRequest";

function Register() {

  const[error,setError] = useState("");
  const[isLoading,setIsLoading] = useState(false);
  const navigate = useNavigate();


  const handleSubmit = async (e)=>{
    e.preventDefault()
    setIsLoading(true)
    setError("")
    const formData = new FormData(e.target)

    const username = formData.get("username")
    const email = formData.get("email")
    const password = formData.get("password")

    try{
      const res = await apiRequest.post("/auth/register",{
        username,email,password
      })
      navigate("/login")
    }catch(err){
      console.log(err)
      setError(err.response.data.message)
    }finally{
      setIsLoading(false)
    }
  }
  return (
    <div className="register">
      <div className="register-formContainer">
        <form className="form" onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input className="input" name="username" type="text" placeholder="Username" />
          <input className="input" name="email" type="text" placeholder="Email" />
          <input className="input" name="password" type="password" placeholder="Password" />
          <button className="button" disabled={isLoading} >Register</button>
          {error && <span>{error}</span>}
          <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
      <div className="register-imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Register;