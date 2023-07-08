import { createContext, useContext, useState } from "react";

const stateManagement = createContext();
const Context = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [RegNumber, setRegNumber] = useState("");
  const [password, setPassword] = useState("");
  return (
    <stateManagement.Provider
      value={{
        name,
        setName,
        email,
        setEmail,
        RegNumber,
        setRegNumber,
        password,
        setPassword,
      }}
    >
      {children}
    </stateManagement.Provider>
  );
};

export default Context;
export const ItemContext = () => {
  return useContext(stateManagement);
};
