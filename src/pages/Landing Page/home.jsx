import { Button, Card, Carousel, Col, Pagination, Row } from "antd";
import React, { useState } from "react";
import "./home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { Yakubo, ohma } from "../../assets/assets";

import { GET_PRODUCT } from "./query/product-query";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";



const Home = () => {
  const {
    data: productData,
    loading: isProductLoading,
    error: productError,
  } = useQuery(GET_PRODUCT);
  const [data = productData?.users, setData] = useState();
  return (

    <div className="body">
      {/* Hero*/}
      <Row align="center">
        <div className="Hero">
          <Carousel slidesToShow={1} autoplay>
            <img src={Yakubo} height="auto" width="500" />
            <img src={ohma} height="auto" width="500" />
          </Carousel>
        </div>
      </Row>
      {/* Item Carousel*/}
      <Row align="center">
        <h2>Our Selections</h2>
        <div className="Item-Carousel">
          
            <Card bodyStyle={{
              justifyContent: "center",
              textAlign: "center",
            }}>
              <h2>Welcome to Hatoshop : Your Ultimate Hobby Wonderland</h2>      
              <p>Customize your order by pressing the button below.</p>
              <Link to="https://wa.link/3m5siz">
                          <Button type="primary">Custom Order</Button>
                        </Link>
            </Card>
         
        </div>
      </Row>
      <br />
      <br />
      {/* Promotion*/}
      <Row>
        <div className="Promotion">
        <Slider  >
        <Row gutter={[10]} justify="start">
              {data?.map((item) => (
                <Col key={item.uuid} span={12}>
                  <Link to={`/product/${item.uuid}`}>
                    <Card title={item.productName} style={{ margin: "20px", width:"300px"}}
                    cover={<img src={item.avatar} width="100px"/>}>
                      <div className="space">
                        <b>{item.productName}</b>
                       
                        Rp:   <b>{item.productPrice}</b>
                        
                      </div>
                     
                     Category: <b>{item.productCategory}</b>
                    
                     <div>
                        <Link to="https://wa.link/3m5siz">
                          <Button type="primary">Order</Button>
                        </Link>
                        </div>
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>
     
    
        </Slider>
        </div>
      </Row>
      {/* Item Card*/}
      <Row>
        <div className="Item-Card"></div>
      </Row>
    </div>
  );
};

export default Home;
