import React, { createContext, useState, useEffect } from 'react';

export const BasketContext = createContext();

const BasketContextProvider = ({ children }) => {
  const [basketCount, setBasketCount] = useState(0);
 
  const contextValue = {
    basketCount,
    setBasketCount,
  };

  return (
    <BasketContext.Provider value={contextValue}>
      {children}
    </BasketContext.Provider>
  );
};
export default BasketContextProvider;
