import React, { Suspense, useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

import LoginPage from "../pages/loginPage/LoginPage";
import LayoutComponent from "../components/layouts/LayoutComponent";

import AboutMe from "../pages/aboutMe/aboutMe";
import AdminPage from "../pages/Admin Page/adminPage";
import Home from "../pages/Landing Page/home";
import Contentful from "../pages/contentful/Contentful";
import LoadingComponent from "../components/loadingComponent/loadingComponent";
import ProductPage from "../pages/productPage/ProductPage";
import ProductDetail from "../pages/productPage/components/ProductDetail";

const RouteManagement = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token]);

  return (
    <Suspense fallback={LoadingComponent}>
      {!token ? (
        <LayoutComponent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<LoginPage />} />
            <Route path="/About" element={<AboutMe />} />
            <Route path="/Content" element={<Contentful />} />
            
            <Route path="/product" element={<ProductPage />} />
            <Route path="/product/:uuid" element={<ProductDetail />} />
          </Routes>
        </LayoutComponent>
      ) : (
        <LayoutComponent>
          <Routes>
       
          <Route path="/admin" element={<AdminPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/hato" element={<LoginPage />} />
            <Route path="/About" element={<AboutMe />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/product/:uuid" element={<ProductDetail />} />
            
          </Routes>
        </LayoutComponent>
      )}
    </Suspense>
  );
};

export default RouteManagement;
