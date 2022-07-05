import React, { useState } from "react";
import { useQuery } from "react-query";
import Item from "./Item/Item";

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();

const App = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );

  console.log(data);

  const getTotalItems = () => null;

  const handleAddToCart = (clickedItem: CartItemType) => null;

  const handleRemoveFromCart = () => null;

  if (error) return <div>someting went wrong</div>;
  return (
    <div className="">
      <div className="flex justify-between flex-col border-2 border-sky-500 rounded h-full">
        <div>
          {data?.map((item) => (
            <div key={item.id} className="">
              <Item item={item} handleAddToCart={handleAddToCart} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
