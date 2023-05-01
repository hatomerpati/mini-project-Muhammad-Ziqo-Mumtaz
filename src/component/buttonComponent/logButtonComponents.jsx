import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogButtonComponents = () => {
    const token = localStorage.getItem("token")
    return (
        <div>
            {!token ? (<Link to="/home">
                <Button
                    type="primary"
                    onClick={() => {
                        useNavigate()
                    }}
                    danger
                >
                    Logout
                </Button>
            </Link>) : (<Link to="/hato">
                <Button
                    type="primary"
                    onClick={() => {
                        localStorage.removeItem("token");
                    }}

                >
                    Login
                </Button>
            </Link >)}
        </div >
    );
}

export default LogButtonComponents;
