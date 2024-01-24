import React from 'react'
import { CartIcon, LogoGuajolota } from '../Helpers/styledComponets'
import { Menu } from 'antd'
import { Link } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';


function NavBar() {

  
  const headerStyle = {
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "space-between",
    margin: 0,
    padding: 0,
    alignItems: "center",
    borderBottom: "none",
  };



  return (
      <Menu mode="horizontal" style={headerStyle}>
          <Link to="/" style={{ margin: "5px" }}>
            <LogoGuajolota />
          </Link>
          <Link to="/sigin" style={{ margin: "5px" }}>
            <UserOutlined />
          </Link>
          <Link to="/cart" style={{ margin: "5px" }}>
            <CartIcon />
          </Link>
      </Menu>
  );
}

export default NavBar