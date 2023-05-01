import { Card } from 'antd';
import React from 'react';
import { GET_PROFILE } from '../loginPage/query/profile-query';
import { useQuery } from '@apollo/client';

const AboutMe = () => {
    const {
        data,
        loading,
        error,
      } = useQuery(GET_PROFILE);
    return (
        <div>
           
  
        </div>
    );
}

export default AboutMe;
