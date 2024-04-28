import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import "./index.css";
import Footer from "./components/Footer";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    Router,
    RouterProvider,
} from "react-router-dom";
import Nav from "./components/Nav";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Service from "./pages/Service";
import Tracking from "./pages/Tracking";
import Success from "./pages/Success";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthorityDashboard from "./components/dashboard/AuthorityDashboard";
import DashBoardHome from "./components/dashboard/DashBoardHome";
function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<Nav />}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="/tracking" element={<Tracking />} />
                    <Route path="/success-service-item" element={<Success />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>
                <Route path="/admin" element={<AuthorityDashboard />}>
                    <Route index element={<DashBoardHome />} />
                </Route>
            </>
        )
    );
    return (
        <div className=" font-Prompt ">
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
}

export default App;
