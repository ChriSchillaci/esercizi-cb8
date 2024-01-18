import Navbar from "../../components/navbar";
import "./index.scss";

const Contacts = () => {
  return (
    <>
      <Navbar />
      <div className="Contacts">
        <div className="Contacts__info">
          <h1>Contact Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            rem, expedita mollitia officiis reprehenderit itaque?
          </p>
        </div>
        <form action="/" className="Contacts__inputs">
          <p className="Contacts__inputs__text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
            debitis exercitationem nostrum nobis, rerum rem?
          </p>
          <input
            className="Contacts__inputs__field"
            type="text"
            placeholder="Name"
          />
          <input
            className="Contacts__inputs__field"
            type="text"
            placeholder="Email"
          />
          <textarea
            className="Contacts__inputs__field__text"
            placeholder="Enter your message"
          ></textarea>
          <button className="submit-btn" onSubmit="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contacts;
