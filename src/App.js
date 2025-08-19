import "../src/dist/styles.css";
import Home from "./Pages/Home";
import Navbar from "../src/components/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import Models from "./Pages/Models";
import Contact from "./Pages/Contact";
import ComingSoon from "./Pages/ComingSoon";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />

        <Route path="/drivexcel/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/book-car" element={<Home />} />
        <Route path="/about" element={<ComingSoon />} />
        <Route path="/models" element={<Models />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<ComingSoon />} />
        <Route path="/team" element={<ComingSoon />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
