import { Link, useLocation } from "react-router-dom";
import "./watch.scss"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Watch() {
  const location = useLocation();
  const movie = location.state?.movie || { video: "" };

  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackIcon />
          Home
        </div>
      </Link>
      <video className="video" autoPlay controls src= "https://firebasestorage.googleapis.com/v0/b/movie-ee6fd.appspot.com/o/items%2F1711900451032trailerfile_example_MP4_480_1_5MG.mp4?alt=media&token=acda4605-500c-4da0-9b20-85c45d48b072" />
    </div>
  );
}