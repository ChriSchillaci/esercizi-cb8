import "./index.scss";
import Navbar from "../../components/navbar";
import { Link } from "react-router-dom";

export default function Copyright() {
  return (
    <>
      <Navbar />
      <div className="Copyright">
        <div className="Copyright-text">
          <h1 className="Copyright-title">COPYRIGHT</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            dolor voluptatibus dolore corporis aliquid eaque aperiam saepe,
            fugiat quasi molestiae fugit sequi, consectetur tenetur officiis
            delectus doloribus, natus quos? Doloribus?
          </p>
          <Link to="/">
            <button className="Copyright-btn">Read More</button>
          </Link>
        </div>
        <img
          className="Copyright-img"
          src="https://forefront-it.co.uk/wp-content/uploads/2022/10/undraw_Security_on_re_e491.png"
          alt="image"
        />
      </div>
    </>
  );
}
