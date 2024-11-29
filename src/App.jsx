import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import "./styles/index.css";
import Projects from "./pages/Projects";
import Navbar from './components/Navbar';
import Error404 from "./pages/Error404";

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
            <Route path="/projects" element={<Projects />} />
            <Route path="/*" element={<Error404 />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
