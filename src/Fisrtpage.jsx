import "./firstpage.scss"
import { Link } from "react-router-dom";

export default function Firstpage() {

  return (
    <div className="firstpage">
        <div className="top">
            <div className="wrapper">
            <img className="logo"src="https://i.ibb.co/f8ctKch/logo.png" alt="no pics" />
        </div>
        </div>
        <div className="container">
        <h1>Welcome to Movie</h1>

        <p>
        unlock a world of cinematic wonders!
        </p>
        <span className="span"> <b><Link to="/register" style={{color:"#fffede"}}>Sign up now</Link></b></span>
          <span className="span" style={{color:"#fffede"}}>Already a user ? <b><Link to="/login" style={{color:"#fffede"}}>Sign in</Link></b></span>
        </div>
    </div>
  );
}
