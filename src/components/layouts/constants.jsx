import { Link } from "react-router-dom";
import { Button } from "antd";
import LogButton from "../buttonComponent/logButton";

export const MENU_ITEM = [
  {
    label: <Link to="/about">About</Link>,
    key: "/about",
  },
  {
    label: (
      
      <LogButton/>
    ),
    key: "3",
  },
];
