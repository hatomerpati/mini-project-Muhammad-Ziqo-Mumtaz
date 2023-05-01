import { Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MENU_ITEM } from "./constants";


const LayoutComponent = ({ children }) => {


  return (
    <>
      <Layout>
        {/* Header */}
        <Header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
            flex: "space-between"
          }}
        >
          <Link href="/">
            <div
              style={{
                float: "left",
                width: 120,
                height: 31,
                margin: "16px 24px 16px 0",
                background: "rgba(255, 255, 255, 0.2)",
              }}
            />
          </Link>

          <Menu
            theme="light"
            mode="horizontal"
            onClick={onClick}
            selectedKeys={[current]}
            items={MENU_ITEM}
          />
        </Header>

        {/* Main Content */}
        <Content
          className="site-layout"

          
        >
          <div>
          <div>
            {children}
          </div>
          </div>
        </Content>
        <Footer>

        </Footer>
      </Layout>
    </>
  );
};

export default LayoutComponent;
