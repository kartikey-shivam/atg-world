import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Home from "./Home/home";
import Layout from "./components/Layout";
import Signup from "./Signup";
import Signin from "./Signin";
function App() {
  return (
    <div className="App">
      <Layout />
      <Home />
      <Signup />
      <Signin />
    </div>
  );
}

export default App;
