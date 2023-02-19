import { useContext, useEffect, useState } from "react";
import Footer from "./Footer";
import { ProductsContext } from "./Productscontext";
import { useNavigate } from "react-router-dom";
import { OrdersContext } from "./Orderscontext";

export default function Checkout() {
  const navigate = useNavigate();
  const { selectedProducts, setSelectedProducts } = useContext(ProductsContext)
  const {setPurchaseOrders} = useContext(OrdersContext)
  function hand(id){
    setPurchaseOrders(prev => [...prev, id])
    setSelectedProducts([]);
    navigate('/orders');
  }
  function movetoOrders(arr, id) {
    var i = 0;
    while (i < arr.length) {
      if (arr[i] === id) {
        let val = arr[i];
        setPurchaseOrders(prev => [...prev, val])
        arr.splice(i, 1);
      } else {
        ++i;
      }
    }
    setSelectedProducts(arr);
  }
  const [prod, setProd] = useState([]);
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  useEffect(() => {
    const fetchdata = () => {
      const uniqId = [...new Set(selectedProducts)];
      const d = uniqId.join(',');

        fetch(`https://appleserver.onrender.com/property/search`, {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*"
          }, body: JSON.stringify({
            id: d
          })
        })
          .then(res => res.json())
          .then((data) => {
            if (data.status === "Success") {
              setProd(data.details)
            }
            else if(data.status === "Failed") {
              setProd([])
            }
            else{
              setProd([])
            }
          });
    }

    fetchdata();

  }, [selectedProducts])
  function addProducts(id) {
    setSelectedProducts(prev => [...prev, id])
  }
  function removeProducts(id) {
    const pos = selectedProducts.indexOf(id);
      console.log(pos,id)
    if (pos !== -1) {
      setSelectedProducts(prev => {
        return prev.filter((value, index) => index !== pos);
      })
    }
  }
  let more = -1;
  let subtotal = 0;
  let delivery =0;
  if (prod.length) {
    console.log(prod.length)
    for(let id of selectedProducts){
      const pri = prod.find(p=> p._id === id).price;
      subtotal += pri ;
    }
  }
  let check = true;
  if(subtotal >0){
    delivery = 5;
    more =0;
    check = false;
  }
const total = subtotal + delivery ;
  return (
    <div>
      <div className="p-5 overflow-scroll">
        {!prod.length && (
          <div>
            No Products in your Shopping Cart
          </div>
        )}
        {prod.length && prod.map(pro => (
          <div className="flex flex-col mb-5 overflow-scroll" key={pro._id}>
            <div>
            <div className="bg-gray-100 p-3 rounded-xl shrink-0">
              <img className="w-24" src={require(`../images/${pro.name}.png`)} alt="" />
            </div>
            <div className="pl-4">
              <h3 className="font-bold text-lg capitalize">{pro.name}</h3>
              <p className="text-sm leading-4 text-gray-500">{pro.description}</p>
              <div className="flex">
                <div className="grow">${pro.price}</div>
                <div>
                  <button onClick={() => removeProducts(pro._id)} className="border border-emerald-500 px-2 rounded-lg text-emerald-500">-</button>
                  <span className="px-2">
                    {selectedProducts.filter(id => id === pro._id).length}
                  </span>
                  <button onClick={() => addProducts(pro._id)} className="bg-emerald-500 px-2 rounded-lg text-white">+</button>
                </div>
              </div>
            </div>
            </div>
            <div className="p-5">
             <button onClick={() => movetoOrders(selectedProducts,pro._id)} disabled={check}className={(more === 0 ? 'bg-emerald-500 px-5 py-2 rounded-xl font-bold shadow-emerald-300 shadow-lg text-white w-full' : 'bg-emerald-500 px-5 py-2 rounded-xl font-bold shadow-emerald-300 shadow-lg text-white w-full disabled:opacity-75 cursor-not-allowed')}>Pay ${(((pro.price)*(selectedProducts.filter(id => id === pro._id).length))+5)}</button>
             </div>
          </div>
        ))}
      </div>
      <div className="px-5 mt-4">
        <input value={name} onChange={e => setName(e.target.value)} className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2" type="text" placeholder="Name" />
        <input value={email} onChange={e => setEmail(e.target.value)} className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2" type="email" placeholder="Email Address" />
        <input value={address} onChange={e => setAddress(e.target.value)} className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2" type="text" placeholder="Street Address" />
        <input value={city} onChange={e => setCity(e.target.value)} className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2" type="text" placeholder="City and Postal code" />
      </div>
      <div className="px-5 mt-4">
        <div className="flex my-3">
          <h3 className="grow font-bold text-gray-400">Subtotal:</h3>
          <h3 className="font-bold">${subtotal}</h3>
        </div>
        <div className="flex my-3">
          <h3 className="grow font-bold text-gray-400">Deliverys:</h3>
          <h3 className="font-bold">${delivery}</h3>
        </div>
        <div className="flex my-3 pt-3 border-t border-dashed border-emerald-500">
          <h3 className="grow font-bold text-gray-400">Total:</h3>
          <h3 className="font-bold">${total}</h3>
        </div>
      </div>
      <div className="p-5">
        <button onClick={()=> hand(selectedProducts)} disabled={check}className={(more === 0 ? 'bg-emerald-500 px-5 py-2 rounded-xl font-bold shadow-emerald-300 shadow-lg text-white w-full' : 'bg-emerald-500 px-5 py-2 rounded-xl font-bold shadow-emerald-300 shadow-lg text-white w-full disabled:opacity-75 cursor-not-allowed')}>Pay ${total}</button>
      </div>
      <Footer/>
    </div>
  );
}