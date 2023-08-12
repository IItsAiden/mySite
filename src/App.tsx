import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Resume from "./pages/Resume";

function App() {
  return (
    <div className="bg-body">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/mySite/" element={<Home />} />
          <Route path="/mySite/about" element={<About />} />
          <Route path="/mySite/resume" element={<Resume />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
