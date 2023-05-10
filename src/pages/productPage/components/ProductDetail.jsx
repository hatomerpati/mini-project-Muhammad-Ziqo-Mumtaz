import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_PRODUCT_BY_PK } from "../query/product-query";


const ProductDetail = () => {
  const { uuid } = useParams();

  // Get Product by uuid (pk)
  const {
    data: productData,
    loading: isProductLoading,
    error: productError,
  } = useQuery(GET_PRODUCT_BY_PK, {
    variables: { uuid },
  });
console.log(productData)
  return (
    <>
      <h1>Product Detail</h1>
 

      <img
        src={productData?.product_by_pk?.avatar}
        alt="product-image"
        style={{ height: "300px" }}
      />
 
      <h3>{productData?.product_by_pk?.productName}</h3>
      <div>
        Rp {productData?.product_by_pk?.productPrice} | Category:
        {productData?.product_by_pk?.productCategory}
      </div>
   
      <p>{productData?.product_by_pk?.productFresh}</p>
    </>
  );
};

export default ProductDetail;
