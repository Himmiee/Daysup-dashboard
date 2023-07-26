export const INITIAL_STATE = {
  userDetails: [],
  loginDetails: [],
  accordionDetails: [],
  studentDetails: [],
  eachDetails: {},
};

export const Reducer = (state, action) => {
  switch (action.type) {
    case "USER_DETAILS":
      return {
        ...state,
        userDetails: action.payload,
      };
    case "LOGIN_DETAILS":
      return {
        ...state,
        loginDetails: action.payload,
      };
    case "ACCORDION_MENU":
      return {
        ...state,
        accordionDetails: action.payload,
      };
    case "STUDENT_DETAILS":
      return {
        ...state,
        studentDetails: action.payload,
      };
    case "EACH_DETAIL":
      return {
        ...state,
        eachDetails: action.payload,
      };
  }
};
