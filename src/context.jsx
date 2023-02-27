import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

function AppProvider({ children }) {
  return <AppContext.Provider value={''}>{children}</AppContext.Provider>;
}

const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider, useGlobalContext };
