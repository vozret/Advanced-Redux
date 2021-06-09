import { useSelector } from "react-redux";
import { useEffect } from "react";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  // useSelector sets a subscription to redux
  // and every time the state changes, "cart" will also change
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    // we are first updating the state and then sending the data to the server
    // thus creating a fat reducer
    fetch("https://react-redux-21461-default-rtdb.firebaseio.com/cart.json", {
      method: "PUT",
      body: JSON.stringify(cart),
    });
  }, [cart]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
