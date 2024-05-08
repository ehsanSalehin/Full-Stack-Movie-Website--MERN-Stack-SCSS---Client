import "./listitem.scss"
import { useState, useEffect } from "react";
import axios from "axios"
import { Link } from "react-router-dom";


export default function Listitem({index, item}) {
  const [isHover,setIsHover]=useState(false);
  const [movie,setMovie] = useState({});

  useEffect(()=>{
    const getMovie = async()=>{
      try{
        const res = await axios.get("/movies/find/"+item,{
        headers: {
          token: "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      setMovie(res.data);
      }catch(err){
        console.log(err)
      }
    }
    getMovie();
  },[item]);

  return (
    <Link to={{ pathname: "/watch", movie: movie }}>
    <div className="ListItem"
    style={{left: isHover && index * 225-50 + index * 2.5}}
    onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)}>

    <img src={movie?.imgSm} />
    {isHover && (
      <>
        <video src={movie.trailer} autoPlay={true} loop />
        <div className="itemInfo">
          <div className="itemInfoTop">
          <span>{movie.title}</span>
            <span>{movie.duration}</span>
            <span className="limit">{movie.limit}</span>
            <span>{movie.year}</span>
          </div>
          <div className="decs">{movie.desc}</div>
          <div className="genrr">{movie.genre}</div>
        </div>
      </>
    )}
    </div>
    </Link>  
  );

}
