import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ProviderDetail from "./pages/ProviderDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/providers/:id" element={<ProviderDetail />} />
    </Routes>
  );
}

export default App;
