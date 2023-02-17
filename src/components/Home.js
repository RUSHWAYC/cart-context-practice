import React, { useState } from "react";
import { faker } from "@faker-js/faker";

import SingleProduct from "./SingleProduct";
import "./styles.css";

faker.seed(100);

const Home = ({ cart, setCart }) => {
  const productsArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.product(),
    price: faker.commerce.price(100, 200, 0),
    image: faker.image.imageUrl(640, 480, `${faker.commerce.product()}`),
  }));

  const [products] = useState(productsArray);

  return (
    <div className="productContainer">
      {products.map((prod) => (
        <SingleProduct
          prod={prod}
          cart={cart}
          setCart={setCart}
          key={prod.id}
        />
      ))}
    </div>
  );
};

export default Home;
