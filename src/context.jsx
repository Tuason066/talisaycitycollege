import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

function AppProvider({ children }) {
  /* navbar */
  const [isAsideNavLinks, setIsAsideNavLinks] = useState(false);
  /* aside nav links float */
  const [isAsideNavLinksFloat, setIsAsideNavLinksFloat] = useState({
    state: false,
    title: '',
    location: { top: 0, center: 0 },
  });

  return (
    <AppContext.Provider
      value={{
        isAsideNavLinks,
        setIsAsideNavLinks,
        isAsideNavLinksFloat,
        setIsAsideNavLinksFloat,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider, useGlobalContext };
