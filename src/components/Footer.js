import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";

export default function Footer() {
  
  return (
    <Router>
    <footer className="sticky bottom-0 bg-white py-5 w-full flex border-t border-gray-200 justify-center space-x-12 text-gray-400">
      <Link to="/">Home</Link>
      <Link to="/checkout">Cart</Link>
    </footer>
    </Router>
  );
}