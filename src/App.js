import { Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import ProductTable from "./pages/admin/ProductTable";
import ProductUpdate from "./pages/admin/ProductUpdate";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Protection from "./components/Protection";
import Basket from "./pages/Basket";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Product />} />
        <Route exact path="/productDetail/:id" element={<ProductDetail/>} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/basket" element={<Basket />} />

        <Route element={<Protection />}>
          <Route exact path="/productTable" element={<ProductTable />} />
          <Route exact path="/productUpdate/:id" element={<ProductUpdate />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
