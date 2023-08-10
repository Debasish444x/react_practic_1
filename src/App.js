import logo from './logo.svg';
import './App.css';
import  Dashboard  from './Components/Auth/Dashboard';
import { Login } from './Components/Auth/Login';
import { BrowserRouter, Routes , Route, Link } from "react-router-dom";
import { Products } from './Components/products/Products';


function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
    <Routes >
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes >
      </BrowserRouter>
    </div>
  );
}

export default App;
