import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import ProjectDescription from "./components/ProjectDescription";
import Main from "./First";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/feedbacks" element={<Feedbacks />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/works" element={<Works />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;