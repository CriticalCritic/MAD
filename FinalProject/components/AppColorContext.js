import React, { useState, useContext, createContext } from "react";

const AppColorContext = createContext({});

const ColorProvider = ({value, children}) => {
    const [appColor,setAppColor] = useState(value);

    return (
        <AppColorContext.Provider
            value={{appColor,setAppColor}} >
        {children}
        </AppColorContext.Provider>
    )
}
export default ColorProvider
export const useAppColor = () => useContext(AppColorContext)
  
  