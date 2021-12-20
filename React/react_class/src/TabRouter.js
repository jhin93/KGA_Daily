import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import TabRouterLayout from "./pages/TabRouterLayout";
import Login from "./pages/Login";
import TabArchangelList from "./pages/TabArchangelList";
import { TabCalData, TabTextaddition } from "./pages/TabCalcResult";

import Home from "./pages/Home";

export default function TabRouter () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TabRouterLayout />}>
                    <Route index element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="archAngel" element={<TabArchangelList />} />
                    <Route path="calc" element={<><TabCalData /><TabTextaddition /></>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
