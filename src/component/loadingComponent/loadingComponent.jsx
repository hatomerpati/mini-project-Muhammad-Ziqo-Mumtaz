import React from 'react';
import { Spin } from 'antd';
import "./loadingComponent.css"
const LoadingComponent = () => {
    return (
        <div className="loading-container">
            <Spin  size='large' tip="Loading...." />
        </div>
    );
}

export default LoadingComponent;
