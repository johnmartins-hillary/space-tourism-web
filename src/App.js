import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Technology from "./components/Technology";
import Crew from "./components/Crew";
import Destination from "./components/Destination";
import Navigation from "./components/Navigation";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/navigation" element={<Navigation />}></Route>
          <Route path="/crew" element={<Crew />}></Route>
          <Route path="/technology" element={<Technology />}></Route>
          <Route path="/destination" element={<Destination />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
