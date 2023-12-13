import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const items = [
  {
    label: "Home",
    key: "home",
    path: "/",
  },
  {
    label: "Register",
    key: "register",
    path: "/register",
  },
  {
    label: "Login",
    key: "login",
    path: "/login",
  },
];

const NavMenu: React.FC = () => {
  return (
    <Menu mode="horizontal" theme="dark" defaultSelectedKeys={["home"]}>
      {items.map((item) => (
        <Menu.Item key={item.key}>
          <Link to={item.path}>{item.label}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default NavMenu;
