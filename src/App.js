import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Assests from "./Pages/Assests";
import History from "./Pages/History";
import SideBar from "./Component/Sidebar";
import Wallet from "./Pages/Wallet";

const App=()=>{
    return(
        <BrowserRouter>
        <SideBar>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/assests" element={<Assests/>}/>
            <Route path="/history" element={<History/>}/>
            <Route path="/wallet" element={<Wallet/>}/>
        </Routes>
        </SideBar>
        </BrowserRouter>
    )
}
export default App;