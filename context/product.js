import { createContext, useContext, useMemo, useState } from 'react';
const ProductContext = createContext();

export function ProductContextProvider({ children, product }) {
  const [productState, setProductState] = useState({
    product: product
  });

  const setProduct = newProduct => {
    setProductState({
      ...productState,
      product: newProduct
    });
  };

  const actions = useMemo(
    () => ({
      setProduct
    }),
    [setProduct]
  );

  const contextValue = useMemo(() => [productState, actions], [
    productState,
    actions
  ]);

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProductContext() {
  return useContext(ProductContext);
}
