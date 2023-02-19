import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Checkout from './components/Checkout';
import { ProductsContextProvider } from './components/Productscontext';

export default function App() {
  
  return (
    <div >
    <Router>
      <ProductsContextProvider>
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/checkout" element={<Checkout/>} />
      </Routes>
      </ProductsContextProvider>
    </Router>
    </div>
  )
}
