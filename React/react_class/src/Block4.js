import React from "react";
import {Route , BrowserRouter as Router, Routes} from "react-router-dom";
// import Layout from "./pages/Layout";
import About from "./pages/About";
// import NoPage from "./pages/Nopage";
// import Contact from "./pages/Contact";
import Home from "./pages/Home";

export default function Block4() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" component={Home} /> {/* 임포트한 컴포넌트를 직접 넣을때는 component라고 쓴다. <> 안에 넣으려면 element라고 해야 됨*/}
                    <Route path="/about" component={About} /> 
                </Routes>
            </Router>
        </div>        
    )
}