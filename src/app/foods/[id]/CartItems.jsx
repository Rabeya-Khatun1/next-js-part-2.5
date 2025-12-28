"use client";
import { CartContext } from "@/context/CardProvider";
import React, { use } from "react";


const CartItems = () => {
  const { cart } = use(CartContext);
  return <div>{cart.length} Items added</div>;
};

export default CartItems;
