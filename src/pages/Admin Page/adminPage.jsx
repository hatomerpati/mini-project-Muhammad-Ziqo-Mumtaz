import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

 useEffect(() => {
   if (!token) {
     navigate("/hato");
   }
 }, [token]);
    return (
        <div>
            
        </div>
    );
}

export default AdminPage;
