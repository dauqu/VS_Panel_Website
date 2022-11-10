import  axios  from "axios";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Newprofile from "./components/Newprofile";
import Profile from "./components/Profile";
import Register from "./components/Register";
import Slider from "./components/Slider";
import StripePayment from "./components/StripePayment";
import Test from "./components/Test";
// allow axios credentials

axios.defaults.withCredentials = true;
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/slider" element={<Slider />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/test" element={<Test />} />
        <Route path="/stripepayment" element={<StripePayment />} />
        <Route path="/newprofile" element={<Newprofile />} />
      </Routes>
    
    </>
  );
}

export default App;
