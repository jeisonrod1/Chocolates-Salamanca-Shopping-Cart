import React from "react";
import { BrowserRouter, Route, Routes as Routing } from "react-router-dom";
import Home from "../home/Home";
import NavBar from "../navbar/NavBar";
import ItemDetailContainer from "../item-detail/ItemDetailContainer";
import Cart from "../cart/Cart";
import { CartProvider } from "../context/CartContext";

const Routes = () => {
  return (
    <>
      <div className="App">
        <CartProvider>
          <BrowserRouter>
            <NavBar />
            <Routing>
              <Route path="/" element={<Home />} />
              <Route path="/chocolate/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
            </Routing>
          </BrowserRouter>
        </CartProvider>
      </div>
    </>
  );
};

export default Routes;
