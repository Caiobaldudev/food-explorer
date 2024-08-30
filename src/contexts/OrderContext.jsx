import React, { createContext, useContext, useState } from 'react';

const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [orderCount, setOrderCount] = useState(0);

  const addToOrder = (quantity) => {
    setOrderCount((prevCount) => prevCount + quantity);
  };

  const value = { orderCount, addToOrder };

  return (
    <OrderContext.Provider value={value}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrder() {
  return useContext(OrderContext);
}