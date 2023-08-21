import { useContext, useState, createContext, useEffect } from 'react'

const AppContext = createContext(undefined)



function AppProvider ({ children }) {




  const contextData = {

  }

  return (
    <AppContext.Provider value={{ ...contextData }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useGlobalContext }
