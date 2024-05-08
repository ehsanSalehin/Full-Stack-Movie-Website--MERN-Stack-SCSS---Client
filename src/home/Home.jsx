import Featured from '../components/Featured';
import List from '../components/List';
import Topbar from '../components/Topbar';
import './home.scss'
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from '../AuthContext';


  const Home = ({ type }) => {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);
    const {user} = useContext(AuthContext)

    useEffect(() => {
      const getRandomLists = async () => {
        try {
          const res = await axios.get(
            `lists${type ? "?type=" + type : ""}${
              genre ? "&genre=" + genre : ""
            }`,
            {
              headers: {
                token:
                "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
              },
            }
          );
          setLists(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      getRandomLists();
    }, [type, genre]);
    
    return (
      <div className="home">
        <Topbar />
        <Featured type={type} setGenre={setGenre} />
        {lists.map((list) => (
          <List list={list} />
        ))}
      </div>
    );
  };
  export default Home;