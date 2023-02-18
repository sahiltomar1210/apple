import './App.css';
import {useEffect, useState} from "react";
import Product from './components/Product';
import Footer from './components/Footer';

export default function App() {
  const [productsInfo,setproductsInfo] = useState([])
  const [phrase,setphrase] = useState('')
  useEffect(()=>{
    const fetchdata = () => {
      fetch("https://appleserver.onrender.com/property/", {
          method: "GET",
          crossDomain: true,
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
              "Access-Control-Allow-Origin": "*"
          }
      })
          .then(res => res.json())
          .then(data => setproductsInfo(data.details));
      }
     fetchdata();
  },[])
  const d = productsInfo.map((p)=>p.category)
  const categoriesNames = [...new Set(d)]

  let products;
  if(phrase){
    products = productsInfo.filter(p => p.name.toLowerCase().includes(phrase));
  }else{
    products = productsInfo;
  }
  return (
    <div className="p-5">
      <input value={phrase} onChange={e => setphrase(e.target.value)} type="text" placeholder='Search for Products...' className='bg-gray-100 w-full py-2 px-4 rounded-xl'/>
      <div>
        {categoriesNames.map(categoryName => (
          <div key={categoryName}>
            {products.find(p => p.category === categoryName) && (
              <div>
                <h2 className="text-2xl py-5 capitalize">{categoryName}</h2>
                <div className="flex -mx-5 overflow-x-scroll snap-x scrollbar-hide">
                  {products.filter(p => p.category === categoryName).map(productInfo => (
                    <div key={productInfo._id} className="px-5 snap-start">
                      <Product {...productInfo} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  )
}
