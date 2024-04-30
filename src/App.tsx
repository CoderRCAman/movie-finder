import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import StoreProvider from "./store/StoreProvider";
export default function App() {
  return (
    <StoreProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" />
        </Routes>
      </Router>
    </StoreProvider>
  );
}
