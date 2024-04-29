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
import ProductUpload from "./components/dashboard/ProductUpload";
import Technicians from "./components/dashboard/Technicians";
import AssignTask from "./components/dashboard/AssignTask";
import UserData from "./components/dashboard/UserData";
import ProductUpdate from "./components/dashboard/ProductUpdate";
import TechnicianBoard from "./components/dashboard/TechnicianBoard";
import TechnicianHome from "./components/dashboard/TechnicianHome";
import CustomizeServiceItem from "./components/dashboard/CustomizeServiceItem";
import SpecificProduct from "./pages/SpecificProduct";
import TechLogin from "./pages/TechLogin";
import ReportTask from "./pages/ReportTask";
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
                    <Route path="/product/:id" element={<SpecificProduct />} />
                </Route>
                <Route path="/dashboard" element={<AuthorityDashboard />}>
                    <Route index element={<DashBoardHome />} />
                    <Route path="assigntask/:itemID" element={<AssignTask />} />
                    <Route path="addproducts" element={<ProductUpload />} />
                    <Route path="assignTechnician" element={<Technicians />} />
                    <Route path="user/:userID" element={<UserData />} />
                    <Route
                        path="product/:productID"
                        element={<ProductUpdate />}
                    />
                </Route>
                <Route path="/technicians" element={<TechnicianBoard />}>
                    <Route index element={<TechnicianHome />} />
                    <Route
                        path="items/:itemId"
                        element={<CustomizeServiceItem />}
                    />
                    <Route path="reportTask/:id" element={<ReportTask />} />
                    <Route path="login" element={<TechLogin />} />
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
