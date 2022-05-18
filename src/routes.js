import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cars from "./components/cars";
import Home from "./components/home";

//Utilizando uma biblicoteca Router do React para deixar o projeto mais organizado, que irá ser importado no "App.js"
export default function newRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Cars />} />
                <Route exact path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}
