import './topbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import { logout } from '../AuthAction';
import CancelIcon from '@mui/icons-material/Cancel';


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
                <span className='stay'>Home</span>    
                </Link>
                <Link to="/series" className='link'>
                <span className='stay'>Series</span>
                </Link>
                <Link to = "/movies" className='link'>
                <span className='stay'>Movies</span>
                </Link>
            </div>
            <div className="right">
                <div className="profile">
                    <CancelIcon className='icon'/>
                    <div className="options">
                        <span onClick={() => dispatch(logout())}>Logout</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};