import { createContext, useContext, useState, useReducer } from "react";
import { INITIAL_STATE, Reducer } from "./reducer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const stateManagement = createContext();
const Context = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [regNumber, setRegNumber] = useState("");
  const [popErr, setPopErr] = useState("");
  const [popup, setPopup] = useState(false);
  const [password, setPassword] = useState("");
  const [theId, setTheId] = useState("");
  const [popupMsg, setPopUpMsg] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errMsg,setErrMessage] = useState("");
  const [leave, setLeave] = useState("");
  const [showNav, setShowNav] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const [err, setErr] = useState("");
  const [loginErr, setLoginErr] = useState("");
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
  let baseUrl = "https://daysup.onrender.com";
  let is_authenticated;
  const navigate = useNavigate();
  const RegisterUser = async () => {
    try {
      const res = await axios.post(`${baseUrl}/user/auth`, {
        name,
        email,
        password,
        regNumber,
      });

      if (res.status !== 400 || res.status !== 401) {
        // setPopUpMsg("User Created Successfully");
        console.log(res.data);
        setErr(" ");
        dispatch({ type: "USER_DETAILS", payload: res.data });
        navigate("/");
        setPopUpMsg(true)
        setSuccessMsg("User Created Successfully")
        setIsLoading(false);
       }
    } catch (err) {
      setIsLoading(false);
      console.log(err.response.data);
      setErr(err.response.data);
    }
  };
  const RegisterStudents = async () => {
    try {
      const res = await axios.post(`${baseUrl}/addStudent`, {
        name,
        email,
        regNumber,
      });

      if (res.status !== 400 || res.status !== 401) {
        console.log(res.data);
        setPopup(false);
        setPopUpMsg(true)
        setSuccessMsg("Student Created!")
        // dispatch({ type: "STUDENT_DETAILS", payload: res.data });
      }
    } catch (err) {
      console.log(err.response.data);
      setErr(err.response.data);
    }
  };

  const UserLogin = async () => {
    try {
      const res = await axios.post(`${baseUrl}/user/login`, {
        email,
        password,
      });
      if (res.status !== 400 || res.status !== 401) {
        console.log(res.data);
        setLoginErr(" ");
        localStorage.setItem("email", res?.data.email);
        localStorage.setItem("name", res?.data.name);
        localStorage.setItem("is_admin", res?.data.is_admin);
        localStorage.setItem("token", res?.data.authentication["accessToken"]);
        localStorage.setItem("is_authenticated", true);
        dispatch({ type: "LOGIN_DETAILS", payload: res?.data });
        navigate("/main");
        setPopUpMsg(true)
        setSuccessMsg("User login Successful")
        setIsLoading(false);

      }
    } catch (err) {
      setIsLoading(false);
      console.log(err.response.data);
      setLoginErr(err.response.data);
    }
  };
  const AccordionList = async () => {
    try {
      const email = localStorage.getItem("email");
      const token = localStorage.getItem("token");
      const res = await axios.get(`${baseUrl}/leave/${email}`, {
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
  const ApproveRequest = async () => {
    try {
      const res = await axios.put(
        `${baseUrl}/updateLeaveStatus/${theId}`,
        {
          status: "completed",
        }
      );

      if (res.status !== 400 || res.status !== 401) {
        setPopUpMsg(true)
        setSuccessMsg("Approved!")
        // console.log(res.data);
      }
    } catch (err) {
      console.log(err.response.data);
      setErr(err.response.data);
    }
  };
  const DeleteRequest = async () => {
    try {
      const res = await axios.delete(
        `${baseUrl}/deleteLeave/${theId}`,
      );

      if (res.status !== 400 || res.status !== 401) {
        setPopUpMsg(true)
        setSuccessMsg("Denied!")
      }
    } catch (err) {
      console.log(err.response.data);
      setErr(err.response.data);
    }
  };
  const leaveList = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${baseUrl}/leaveList`, {
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
      const res = await axios.get(`${baseUrl}/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({ type: "STUDENT_DETAILS", payload: res.data });
      // console.log(res.data);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  const CreateAccordion = async () => {
    try {
      const name = localStorage.getItem("name");
      const email = localStorage.getItem("email");
      console.log(name, email, leave);
      const res = await axios.post(`${baseUrl}/leave`, {
        name: name,
        email: email,
        leave,
      });
      if (res.status !== 400 || res.status !== 401) {
        console.log(res.data);
        setPopErr("");
        if (!res.data.errors) {
          setPopup(false);
          setPopUpMsg(true)
          setSuccessMsg("Request Added!")
        } else {
          // setPopErr(res.data.name)
        }
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
        leaveList,
        state,
        RegisterStudents,
        dispatch,
        setErr,
        loginErr,
        setLoginErr,
        RegisterUser,
        UserLogin,
        AccordionList,
        popup,
        setPopup,
        theId,
        setTheId,
        leave,
        isLoading,
        setIsLoading,
        setLeave,
        CreateAccordion,
        getStudents,
        popErr,
        setPopErr,
        ApproveRequest,
        DeleteRequest,
        popupMsg,
        setPopUpMsg,
        successMsg,
        setSuccessMsg,
        errMsg,
        setErrMessage
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
