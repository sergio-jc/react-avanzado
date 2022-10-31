import React, { createContext, useState} from 'react';

export const AppContext = createContext(null);

export const AppProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false)

    const activateAuth = () => setIsAuth(true)
  
    return (
      <AppContext.Provider value={{ isAuth, activateAuth }}>
        {children}
      </AppContext.Provider>
    )
}

