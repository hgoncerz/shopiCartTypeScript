import React, { useState } from "react";
import { useQuery } from "react-query";

const getProducts = async () =>
  await (await fetch("https://fakestoreapi.com/products")).json();

const App = () => {
  return <div className="App"></div>;
};

export default App;
