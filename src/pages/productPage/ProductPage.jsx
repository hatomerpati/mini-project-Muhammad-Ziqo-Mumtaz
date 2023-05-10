import React, { useState } from "react";

import { useQuery } from "@apollo/client";
import { GET_PRODUCT } from "./query/product-query";
import { Button, Card, Col, Input, Result, Row } from "antd";

import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import LoadingComponent from "../../components/loadingComponent/loadingComponent";

const ProductPage = () => {
  // Get Data
  const {
    data: productData,
    loading: isProductLoading,
    error: productError,
  } = useQuery(GET_PRODUCT);
console.log(productData)
  const [data = productData?.users, setData] = useState();

  const handleSearch = (e) => {
    const value = e.target.value;

    setData(
      productData?.users.filter((item) => {
        const isMatchProduct = value
          ? item.productName.toLowerCase().includes(value.toLowerCase())
          : true;

        return isMatchProduct;
      })
    );
  };

  return (
    <>
      {isProductLoading ? (
        <LoadingComponent />
      ) : (
        <>
          <h1>Product List</h1>
        <br/>

          <Input
            placeholder="Search Product Here"
            prefix={<SearchOutlined />}
            onChange={handleSearch}
          />

        <br/>

          {data.length > 0 ? (
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
          ) : (
            <Row justify="center">
              <Result status="404" subTitle="Product not found" />
            </Row>
          )}
        </>
      )}
    </>
  );
};

export default ProductPage;
