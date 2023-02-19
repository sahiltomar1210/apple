import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Checkout from './components/Checkout';
import { ProductsContextProvider } from './components/Productscontext';
import Order from './components/Order';
import { OrdersContextProvider } from './components/Orderscontext';

export default function App() {
  
  return (
    <div >
    <Router>
      <ProductsContextProvider>
      <OrdersContextProvider>
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/checkout" element={<Checkout/>} />
      <Route path="/orders" element={<Order/>} />
      </Routes>
      </OrdersContextProvider>
      </ProductsContextProvider>
    </Router>
    </div>
  )
}
