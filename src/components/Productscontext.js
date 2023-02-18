import { createContextState } from 'react-create-context';
import useLocalStorageState from 'use-local-storage-state';

export const ProductsContext = createContextState({});

export function ProductsContextProvider({children}) {
  const [selectedProducts,setSelectedProducts] = useLocalStorageState('cart', {defaultValue:[]});
  return (
    <ProductsContext.Provider value={{selectedProducts,setSelectedProducts}}>{children}</ProductsContext.Provider>
  );
}