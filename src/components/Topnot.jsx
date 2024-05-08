import './topnot.scss'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import { logout } from '../AuthAction';



export default function Topbar() {
    const [isScrolled, setIsScrolled] = useState(false)


    const { dispatch } = useContext(AuthContext);

    window.onscroll = ()=>{
        setIsScrolled(window.scrollY === 0 ?false:true);
        // clean-up function
        return () => (window.onscroll = null);
    };

  return (
    <div className={isScrolled ? "topbar scrolled" : "topbar"}>
        <div className="container">
            <div className="left">
                <img src="https://i.ibb.co/f8ctKch/logo.png" alt="no pics" />
                <Link to="/" className='link'>
                <span>Home</span>    
                </Link>
                <Link to="/series" className='link'>
                <span>Series</span>
                </Link>
                <Link to = "/movies" className='link'>
                <span>Movies</span>
                </Link>
            </div>
            <div className="right">
            <span>New User ? <b><Link to="/register">Sign up now</Link></b></span>
            </div>
        </div>
    </div>
  );
};