
import Featured from "../components/featured/Featured";
import Navbar from "../components/Navbar/Navbar";
import "./home.scss"

const Home = () => {
  return <div className="home">
     <Navbar/>
     <img 
     width="100%"
     src="https://wallpapercave.com/wp/wp5192259.jpg" alt="" />
   

 <Featured />
  </div>;
};

export default Home;
