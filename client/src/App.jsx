import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import "./App.css";

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <HeroSection />
    </Router>
  );
}

export default App;
