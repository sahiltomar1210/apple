import { createContext } from 'react';
import useLocalStorageState from 'use-local-storage-state';

export const OrdersContext = createContext({});

export function OrdersContextProvider({children}) {
  const [purchaseOrders,setPurchaseOrders] = useLocalStorageState('orders',{defaultValue:[]});
  return (
    <OrdersContext.Provider value={{purchaseOrders,setPurchaseOrders}}>{children}</OrdersContext.Provider>
  );
}