import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import About from "./About";
import Careers from "./Careers";
import Services from "./Services";
import Contact from "./Contact";
import Foodeez from "./Foodeez";
import ScrollToTop from "./ScrollToTop";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/foodeez" element={<Foodeez />} />
          <Route path="/industries" element={<Navigate to="/foodeez" replace />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </Router>
  );
}
