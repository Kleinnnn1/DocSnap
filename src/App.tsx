import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landpage from "./pages/Landpage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landpage />} />
      </Routes>
    </BrowserRouter>
  );
}
