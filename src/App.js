import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Home from "./Home/home";
import Layout from "./components/Layout";
function App() {
  return (
    <div className="App">
      <Layout />
      <Home />
    </div>
  );
}

export default App;
