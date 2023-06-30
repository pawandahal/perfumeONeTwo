import React from "react";
import Brands from "./pages/Brands";
import Man from "./pages/Man";
import Woman from "./pages/Woman";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddToCart from "./pages/AddToCart";
import AddPerfume from "./components/FormSection/AddPerfume";
import Gender from "./pages/DetailsPages";
import "./App.css";
import Category from "./components/DetailAndCategoryField/Category";
import LogoForm from "./components/FormSection/LogoForm";
import Message from "./Admin/messageSection/Message";
const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/logo" element={<LogoForm />} />
          <Route path="" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/man" element={<Man />} />
          <Route path="/woman" element={<Woman />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addToCart" element={<AddToCart />} />

          <Route path="/add" element={<AddPerfume />} />
          <Route path="/details/:id" element={<Gender />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path='/admin/message' element={<Message/>} /> 
        </Routes>
      </Router>
    </div>
  );
};

export default App;
