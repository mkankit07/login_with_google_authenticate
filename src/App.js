import Navbar from "./components/Navbar";
import Home from "./page/Home";
import Login from "./page/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function App() {
  const user=false
  return (
    <BrowserRouter className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route  path="/login" element={user ? <Navigate to="/"  /> : <Login />} />
        <Route  path="/post/:id" element={user ? <Home/>:<Navigate to="/login"  />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
