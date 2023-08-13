import logo from './logo.svg';
import './App.css';
import  Dashboard  from './Components/Auth/Dashboard';
import { Login } from './Components/Auth/Login';
import { BrowserRouter, Routes , Route, Link } from "react-router-dom";
import AddProduct from './Components/products/AddProduct';
import EditProduct from './Components/products/EditProduct';



function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
    <Routes >
    <Route path="/product/create" element={<AddProduct />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/product/edit/:id" element={<EditProduct />} />

      </Routes >
      </BrowserRouter>
    </div>
  );
}

export default App;
