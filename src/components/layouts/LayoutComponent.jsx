import { Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useWindowWidth from "../../hooks/useWindowWidth";
import { MENU_ITEM } from "./constants";
import "./menu.css"


const LayoutComponent = ({ children }) => {
  const isSmallScreen = useWindowWidth();
  const [visible, setVisible] = useState(isSmallScreen);

  const [current, setCurrent] = useState("1");

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  

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
            background: "white"
            
            
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
          className="hato"
           
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
        <Footer></Footer>
      </Layout>

    </>
  );
};

export default LayoutComponent;
