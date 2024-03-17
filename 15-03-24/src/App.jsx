import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [sortProd, setSortProd] = useState({
    sort: "asc",
    opt: "title",
  });

  const { sort, opt } = sortProd;

  useEffect(() => {
    fetch(`http://localhost:3000/products?sort=${sort}&opt=${opt}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [sortProd]);

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setSortProd((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <select name="opt" value={sortProd.opt} onChange={onHandleChange}>
        <option value="title">title</option>
        <option value="description">description</option>
        <option value="price">price</option>
      </select>
      <select name="sort" value={sortProd.sort} onChange={onHandleChange}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <div className="products">
        {data.map((product) => (
          <div className="product">
            <p>{product.title}</p>
            <img className="product__img" src={product.thumbnail} alt="" />
            <p>{product.description}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
