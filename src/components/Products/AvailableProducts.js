import classes from "./AvailableProducts.module.css";
import Card from "../UI/Card";
import ProductItems from "./ProductItems/ProductItems";

import { useState, useEffect } from "react";

const AvailableProducts = () => {
  const [products, setProducts] = useState([]);

  const price = 100;

  const getHandler = async () => {
    const response = await fetch("https://api.punkapi.com/v2/beers");
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    getHandler();
  }, []);

  const productsList = products.map((product) => (
    <ProductItems
      id={product.id}
      key={product.id}
      name={product.name}
      tagline={product.tagline}
      price={price}
    ></ProductItems>
  ));

  return (
    <section className={classes.products}>
      <Card>
        <ul>{productsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableProducts;
