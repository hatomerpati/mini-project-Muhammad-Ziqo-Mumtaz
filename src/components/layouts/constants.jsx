import { Link } from "react-router-dom";
import { Button, Input } from "antd";
import LogButton from "../buttonComponent/logButton";

export const MENU_ITEM = [

  {
    label: <Link to="../">Home</Link>,
    key: "/home",
  },
  {
    label: <Link to="/about">About</Link>,
    key: "/about",
  },
  {
    label: <Link to="/admin">Admin</Link>,
    key: "/admin",
  },
  {
    label: <Link to="/product">Products</Link>,
    key: "/product",
  },
  {
    label: (
      
      <LogButton/>
    ),
    key: "3",
  },
];
