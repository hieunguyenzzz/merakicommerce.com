import get from 'lodash.get'
import React, { useEffect } from 'react'


export const AppContext = React.createContext({

})

AppContext.displayName = 'AppContext'



export const AppProvider = ({ data, ...props }) => {
  useEffect(() => {
    window.appdata = data
  }, [])
  return <AppContext.Provider value={data}  {...props} />
}

export const useApp = () => {
  const context = React.useContext(AppContext)
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`)
  }
  return context
}
export const useGetDataApp = () => {
  const data = useApp()
  return (path, fallback) => {
    return get(data, path, fallback)
  }
}
