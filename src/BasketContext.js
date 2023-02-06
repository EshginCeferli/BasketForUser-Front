import React, { createContext, useState, useEffect } from 'react';

export const BasketContext = createContext();

const BasketContextProvider = ({ children }) => {
    const [basketCount, setBasketCount] = useState(
      JSON.parse(localStorage.getItem('basketCount')) || 0
    );
  
    useEffect(() => {
      localStorage.setItem('basketCount', JSON.stringify(basketCount));
    }, [basketCount]);

  return (
    <BasketContext.Provider value={{ basketCount, setBasketCount }}>
      {children}
    </BasketContext.Provider>
  );
};
export default BasketContextProvider;
