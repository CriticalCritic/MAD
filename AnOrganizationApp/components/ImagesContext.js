import React, { useContext, createContext } from "react";

const ImagesContext = createContext([]);
export default ImagesContext;

export const useImages = () => useContext(ImagesContext)
