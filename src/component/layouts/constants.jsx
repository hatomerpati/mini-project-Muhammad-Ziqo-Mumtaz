import { Link, redirect } from "react-router-dom";
import { Button } from "antd";
import LogButtonComponents from "../buttonComponent/logButtonComponents";

const token = localStorage.getItem("token")

export const MENU_ITEM = [
  {
    label: <Link to="/home">home</Link>,
    key: "/home",
  },
  {
    label: <Link to="/form">Form</Link>,
    key: "/form",
  },
  {
    label: <Link to="/portfolio">Portfolio</Link>,
    key: "/portfolio",
  },
  {
    label: <Link to="/create-product">Create Product</Link>,
    key: "/create-product",
  },
  {
    label: <Link to="/crud">CRUD</Link>,
    key: "/crud",
  },
  {
    label: <Link to="/swiper">Swiper</Link>,
    key: "/swiper",
  },
  {
  },
  {
    label: (
      {LogButtonComponents}
    ),
    key: "3",
  },
];
