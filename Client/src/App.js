import Button from "./components/Button";
import InputComponent from "./components/inputComponent";
import LoginComponent from "./pages/Authentication/Login";
import RegisterComponent from "./pages/Authentication/Register";


function App() {
  const handleSubmit = () => {
    console.log("button works lol...");
  };
  return (
    <div className="">
      <LoginComponent />
      {/* <RegisterComponent /> */}
      {/* it works lol...
      <InputComponent name="Name" type="password" />
      <Button title="Submit" type="submit" handleClick={handleSubmit} /> */}
    </div>
  );
}

export default App;
