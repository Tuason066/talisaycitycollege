import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

function AppProvider({ children }) {
  /* use to preview the news and updates */
  const [isPreview, setIsPreview] = useState({ state: false, news: [] });
  /* about */
  const [aboutLocation, setAboutLocation] = useState({
    vision: 0,
    mission: 0,
    goals: 0,
    coreValues: 0,
    history: 0,
  });

  return (
    <AppContext.Provider
      value={{ isPreview, setIsPreview, aboutLocation, setAboutLocation }}
    >
      {children}
    </AppContext.Provider>
  );
}

const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider, useGlobalContext };
