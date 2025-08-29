import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./page/Home";
import { Navbar } from "./components/Navbar";
import Sum from "./page/Sum";
import About from "./page/About";
import { Footer } from "./components/Footer";
import Memory from "./page/Memory";

function App() {
  return (
    <div className="app-background-gradient">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sum" element={<Sum />} />
          <Route path="/About" element={<About />} />
          <Route path="/Memory" element={<Memory />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
