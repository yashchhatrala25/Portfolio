import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import "./styles/index.css";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper w-screen h-screen box-container">
        <div className="left-side">
          <Sidebar />
        </div>
        <div className="right-side items-center">
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
