import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Home />
      </div>
    </BrowserRouter>
  );
}

export default App;
