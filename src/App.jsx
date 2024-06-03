import Layout from "./Layouts/layout";
import { Routes,Route } from "react-router-dom";
import Products from "./components/products";
import ProductsDetails from "./components/productsDetails";
import CheckOut from "./components/checkOut";
import NotFound from "./components/notFound";
import ProductsProvider from "./Contexts/ProductsProvider";
import RegistrationForm from "./components/registerForm";
import CartContextProvider from "./Contexts/cartContextProvider";
import ShoppingPage from "./components/ShoppingPage";
import Index from "./components";

const App = () => {
  return (
    <ProductsProvider>
      <CartContextProvider>
        <Layout>
    <Routes>
        <Route index path="/" element={<Index/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/ShoppingCart" element={<ShoppingPage/>}/>
        <Route path="/products/:id" element={<ProductsDetails/>}/>
        <Route path="/signUp" element={<RegistrationForm/>}/>
        <Route path="/checkout" element={<CheckOut/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
      </Layout>
      </CartContextProvider>
    </ProductsProvider>
  );
}

export default App;
