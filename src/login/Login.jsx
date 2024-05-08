import './login.scss'
import { useContext, useState } from "react";
import { login } from "../apiCalls";
import { AuthContext } from "../AuthContext"; 
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };
  return (
    <div className="login">
        <div className="top">
            <div className="wrapper">
            <img className="logo"src="https://i.ibb.co/f8ctKch/logo.png" alt="no pics" />
        </div>
        </div>
        <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder='Email or Phone number' onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
          <button className="loginButton" onClick={handleLogin}>Sign In</button>
          <span>New User ? <b><Link to="/register">Sign up now</Link></b></span>
        </form>
        </div>
    </div>
  );
}
