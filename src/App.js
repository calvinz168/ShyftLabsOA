import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Students from "./pages/Students";
import Courses from "./pages/Courses";
import Results from "./pages/Results";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Students" element={<Students />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Results" element={<Results />} />
      </Routes>
    </div>
  );
}

export default App;
