import { createContext, useContext, useState, useReducer } from "react";
import { INITIAL_STATE, Reducer } from "./reducer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const stateManagement = createContext();
const Context = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [regNumber, setRegNumber] = useState("");
  const [popup, setPopup] = useState(false);
  const [password, setPassword] = useState("");
  const [leave, setLeave] = useState("");
  const [showNav, setShowNav] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const [err, setErr] = useState("");
  const [loginErr, setLoginErr] = useState("");
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
  let baseUrl = "http://localhost:3050/";
  let is_authenticated;
  const navigate = useNavigate();
  const RegisterUser = async () => {
    try {
      const res = await axios.post("http://localhost:3050/user/auth", {
        name,
        email,
        password,
        regNumber,
      });

      if (res.status !== 400 || res.status !== 401) {
        console.log(res.data);
        setErr(" ");
        dispatch({ type: "USER_DETAILS", payload: res.data });
        navigate("/");
      }
    } catch (err) {
      console.log(err.response.data);
      setErr(err.response.data);
    }
  };

  const UserLogin = async () => {
    try {
      const res = await axios.post("http://localhost:3050/user/login", {
        email,
        password,
      });
      if (res.status !== 400 || res.status !== 401) {
        console.log(res.data);
        setLoginErr(" ");
        localStorage.setItem("email", res.data.email);
        localStorage.setItem("name", res.data.name);
        localStorage.setItem("is_admin", res.data.is_admin);
        localStorage.setItem("token", res.data.authentication["accessToken"]);
        localStorage.setItem("is_authenticated", true);
        dispatch({ type: "LOGIN_DETAILS", payload: res.data });
        navigate("/main");
      }
    } catch (err) {
      console.log(err.response.data);
      setLoginErr(err.response.data);
    }
  };
  const AccordionList = async () => {
    try {
      const email = localStorage.getItem("email");
      const token = localStorage.getItem("token");
      const res = await axios.get(`http://localhost:3050/leave/${email}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({ type: "ACCORDION_MENU", payload: res.data });
      console.log(res.data);
    } catch (err) {
      console.log(err.response.data);
    }
  };
  const getStudents = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:3050/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({ type: "STUDENT_DETAILS", payload: res.data });
      console.log(res.data);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  const CreateAccordion = async () => {
    try {
      const name = localStorage.getItem("name");
      const email = localStorage.getItem("email");
      console.log(name, email, leave);
      const res = await axios.post("http://localhost:3050/leave", {
        name: name,
        email: email,
        leave,
      });
      if (res.status !== 400 || res.status !== 401) {
        console.log(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <stateManagement.Provider
      value={{
        name,
        setName,
        email,
        setEmail,
        regNumber,
        setRegNumber,
        password,
        setPassword,
        showNav,
        setShowNav,
        showHeader,
        setShowHeader,
        err,
        state,
        dispatch,
        setErr,
        loginErr,
        setLoginErr,
        RegisterUser,
        UserLogin,
        AccordionList,
        popup,
        setPopup,
        leave,
        setLeave,
        CreateAccordion,
        getStudents,
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
