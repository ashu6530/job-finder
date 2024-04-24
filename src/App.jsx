import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Jobs from "./components/Jobs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Companies from "./components/Companies";
import CurrentJob from "./components/CurrentJob";
import fetchJobs from "./jobFetch";
const App = () => {
  
  return (
    <div>
      <Navbar/>
     
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/jobs" Component={Jobs} />
          <Route path="/companies" Component={Companies} />
          <Route path="/jobs/:id" Component={CurrentJob}/>
        </Routes>
   
      <Footer/>
    </div>
  );
};

export default App;
