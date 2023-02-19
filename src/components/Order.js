import Footer from "./Footer";
import { useContext , useEffect,useState} from "react";
import { OrdersContext } from "./Orderscontext";

export default function Order() {

    const {purchaseOrders} = useContext(OrdersContext)
    const [prod, setProd] = useState([]);
    useEffect(() => {
        const fetchdata = () => {
          const uniqId = [...new Set(purchaseOrders)];
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
    
      }, [purchaseOrders])
    return (
        <>
        <div>
        <div className="p-5 overflow-scroll">
        {!prod.length && (
          <div>
            You have not purchase any product yet !!
          </div>
        )}
        {prod.length && prod.map(pro => (
          <div className="flex mb-5 overflow-scroll" key={pro._id}>
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
                  <span className="px-2">
                    {purchaseOrders.filter(id => id === pro._id).length}
                  </span>
                </div>
              </div>
            </div>
            </div>
          </div>
        ))}
      </div>
        </div>
        <Footer/>
        </>
    )
}