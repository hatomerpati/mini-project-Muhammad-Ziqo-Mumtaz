import React, { Suspense, useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import LoadingComponent from '../components/loadingComponent/loadingComponent';
import LoginPage from '../pages/loginPage/LoginPage';
import LayoutComponent from '../components/layouts/LayoutComponent'

import AboutMe from '../pages/aboutMe/aboutMe';
import AdminPage from '../pages/Admin Page/adminPage';
import Home from '../pages/Landing Page/home';



const RouteManagement = () => {

    return (
        <Suspense fallback={LoadingComponent}>
          <LayoutComponent>
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/hato' element={<LoginPage/>}/>
          <Route path="/admin" element={<AdminPage/>}/>
          <Route path='/About' element={<AboutMe/>}/>
          </Routes>
        </LayoutComponent>
    
 
        </Suspense>
    );
}



export default RouteManagement;
