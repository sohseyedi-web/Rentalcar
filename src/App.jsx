import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Auth from "./components/auth/Auth";
import Menu from "./components/Menu/Menu";
import Single from "./components/layout/SingleProduct/Single";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/register" element={<Auth />} />
        <Route path="/store" element={<Menu />} />
        <Route path="/store/:id" element={<Single />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
