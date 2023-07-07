import { createContext, useContext } from "react";

const stateManagement = createContext();
const Context = ({ children }) => {
  return (
    <stateManagement.Provider value={{}}>{children}</stateManagement.Provider>
  );
};

export default Context;
export const ItemContext = () => {
  return useContext(stateManagement);
};
