import { Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import ProductTable from "./pages/admin/ProductTable";
import ProductUpdate from "./pages/admin/ProductUpdate";

function App() {
  return (
    <div>
      
      <Routes>
        <Route exact path="/" element={<Product />} />
        <Route exact path="/productTable" element={<ProductTable/>} />
        <Route exact path="/productUpdate/:id" element={<ProductUpdate/>} />     

      </Routes>
      
    </div>
  );
}

export default App;
