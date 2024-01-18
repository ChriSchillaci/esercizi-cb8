import Navbar from "../../components/navbar";
import "./index.scss";

export default function About() {
  const mockData = [
    {
      title: "Research",
    },
    {
      title: "Strategy",
    },
    {
      title: "Design",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="About">
        <div className="About__info">
          <h1 className="About__info__title">About</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            aliquam aut iste, rerum doloribus sint beatae doloremque ullam at
            inventore!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            laborum alias atque obcaecati praesentium accusantium!
          </p>
        </div>
        <div className="About__goals">
          {mockData.map((data) => (
            <div className="About__goals__goal">
              <h2>{data.title}</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur saepe quibusdam tempora sed magni architecto fugiat
                id doloremque suscipit tenetur nemo itaque quam sapiente labore,
                cum quas enim. Tempora voluptate natus, cum veniam alias nemo!
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
