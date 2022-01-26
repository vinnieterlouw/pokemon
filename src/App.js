import "./App.css";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import DiscoverPage from "./Pages/DiscoverPage";
import HomePage from "./Pages/HomePage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/discover" element={<DiscoverPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
