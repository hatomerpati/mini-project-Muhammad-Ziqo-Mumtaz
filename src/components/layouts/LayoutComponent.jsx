import { Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useWindowWidth from "../../hooks/useWindowWidth";
import { MENU_ITEM } from "./constants";
import "./menu.css"
import { logo } from "../../assets/assets";


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
            <a
            
              style={{
                float: "left",
              
                
                background: "rgba(255, 255, 255, 0.2)",
              }}
            >
              <img src={logo} width="70px"></img>
            </a>
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
