import { useState } from "react"
import "./register.scss"
import { useRef } from "react"
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = async (e) => {
    e.preventDefault();
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);
    try {
      await axios.post("auth/register", { email,username, password });
      navigate("/login",{replace:true});
    } catch (err) {}
  };
  return (
    <div className="register">
        <div className="top">
            <div className="wrapper">
            <img className="logo"src="https://i.ibb.co/f8ctKch/logo.png" alt="no pics" />
        </div>
        </div>
        <div className="container">
        <h1>Unlimited Movies, TV shows, and more.</h1>

        <p>
          Ready to watch? Enter your email to create your membership.
        </p>
        {!email ? (
                  <div className="input">
            <input type="email" placeholder="Email Address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>Get Started</button>
        </div>
        ):(
          <form className="input">
            <input type="username" placeholder="username" ref={usernameRef} />
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>Start</button>
        </form>
        
        )}
          <span className="span">Already a user ? <b><Link to="/login" style={{color:"#ffffff"}}>Sign in</Link></b></span>
        </div>
    </div>
  );
}
