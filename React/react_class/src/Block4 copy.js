import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./pages/Layout";
import Blogs from "./pages/Blog";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Home from "./pages/Home";

export default function Block4 () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="blogs" element={<Blogs />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
