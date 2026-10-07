import Home from "./pages/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Timer from "./pages/Timer.jsx";
import Navigation from "./components/Navigation.jsx";
import ColorBox from "./pages/ColorBox.jsx";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/box/:color" element={<ColorBox />} />
      </Routes>
    </>
  );
}

export default App;
