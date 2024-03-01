import React, { createContext, useState } from "react";

export const UtilityContext = createContext();

export const UtilityContextProvider = ({ children }) => {
    const [counter, setCounter] = useState(1);

    return (
        <UtilityContext.Provider value={{ counter, setCounter }}>
            {children}
        </UtilityContext.Provider>
    );
};
