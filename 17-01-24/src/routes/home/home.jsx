import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import "./index.scss";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("smartphones");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) =>
        setProducts(
          data.products.filter(
            (product) => product.category === selectedCategory
          )
        )
      );
  }, [selectedCategory]);

  return (
    <div className="Home">
      <Navbar />
      <ul className="categories">
        <li>
          <h2 className="categories__text">Categories:</h2>
        </li>
        <li>
          <button
            className="btn"
            onClick={() => setSelectedCategory("smartphones")}
          >
            Smartphone
          </button>
        </li>
        <li>
          <button
            className="btn"
            onClick={() => setSelectedCategory("laptops")}
          >
            Laptops
          </button>
        </li>
      </ul>
      <div className="Products">
        {products.map((product) => (
          <Link to={`/products/${product.id}`} key={product.id}>
            <div className="Products__product">
              <h3 className="Products__product__title">{product.title}</h3>
              <img
                className="Products__product__img"
                src={product.thumbnail}
                alt={product.title}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
