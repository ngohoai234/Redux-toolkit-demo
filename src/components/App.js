import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/shop/shopActions";
const App = () => {
  const products = useSelector((state) => state.shop.data);
  const dispatch = useDispatch();
  useEffect(() => {
    const promise = dispatch(fetchProducts(12));
    promise.abort();
  }, [dispatch]);
  return (
    <div className="app">
      <h1>App</h1>
    </div>
  );
};

export default App;
