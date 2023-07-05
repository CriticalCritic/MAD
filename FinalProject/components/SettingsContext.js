import React, { useState, useContext, createContext } from "react";

const SettingsContext = createContext({darkMode:false, layoutSize:10});
export default SettingsContext;

export const useSettings = () => useContext(SettingsContext)

