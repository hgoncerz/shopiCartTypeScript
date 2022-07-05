import React from "react";

import { CartItemType } from "../App";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
  return (
    <div>
      <img
        src={item.image}
        alt={item.title}
        className="max-h-64 object-cover rounded-md"
      />
      <div className="font-mono p-1 h-full">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>${item.price}</h3>
      </div>
      <button
        onClick={() => handleAddToCart(item)}
        className="rounded-full bg-sky-500 p-3"
      >
        Add to cart
      </button>
    </div>
  );
};

export default Item;
