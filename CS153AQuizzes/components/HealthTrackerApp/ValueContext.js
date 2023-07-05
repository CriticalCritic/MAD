import React, { useState, useContext, createContext } from "react";

const ValueContext = createContext({name:'none', age:0, weight:0, height:0})

const ValueProvider = ({value, children}) => {
  const [userStats,setStats] = useState(value);

  return (
    <ValueContext.Provider
        value={{userStats,setStats}} >
      {children}
    </ValueContext.Provider>
   )
}
export default ValueProvider
export const useValue = () => useContext(ValueContext)