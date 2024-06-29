import "./css/App.css";
import "./css/Header.css";
import "./css/Intro.css";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="AppContainer">
      <div className="AppInner">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CartPage" element={<CartPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
