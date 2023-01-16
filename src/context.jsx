import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

function AppProvider({ children }) {
  const [isPreview, setIsPreview] = useState({ state: false, news: [] });

  return (
    <AppContext.Provider value={{ isPreview, setIsPreview }}>
      {children}
    </AppContext.Provider>
  );
}

const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider, useGlobalContext };
