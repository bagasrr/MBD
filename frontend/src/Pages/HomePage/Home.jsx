import { Link } from "react-router-dom";
import "./index.css";
const Home = () => {
  return (
    <div className="HomeContainer">
      <div className="HomeGreetings">
        <h1>Hey, Wanna Rent a Car?</h1>
        <Link to="/list">Yes, Of Course</Link>
      </div>
      <div className="HomeImage">
        <img className="carImg" src="https://www.topgear.com/sites/default/files/images/news-article/carousel/2018/07/9ed5d61a8b3326c67057f7f10f4e5260/mclaren_600lt_image01_11072018.jpg" alt="car.image" />
      </div>
    </div>
  );
};

export default Home;
