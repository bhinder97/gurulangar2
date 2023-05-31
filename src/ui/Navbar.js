import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import Hidden from "@mui/material/Hidden";
import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
import InfoIcon from "@mui/icons-material/Info";
import ContactsIcon from "@mui/icons-material/Contacts";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material";
import theme from "../ui/theme.js";
import { NavLink } from "react-router-dom";

import logo from "../images/logo.png";
import "./css/Navbar.css";

import { useSpring, animated } from "react-spring";

function Navbar(props) {
  const down = useSpring({
    from: { y: -100 },
    to: { y: -100 },
    config: { duration: 500 },
  });

  const navItems = [
    { heading: "Home", page: "/", icon: <HomeIcon className="icons" /> },
    {
      heading: "Products",
      page: "/Products",
      icon: <StoreIcon className="icons" />,
    },
    { heading: "About", page: "/About", icon: <InfoIcon className="icons" /> },
    {
      heading: "Contact",
      page: "/Contact",
      icon: <ContactsIcon className="icons" />,
    },
  ];

  const drawerWidth = 240;

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <h4 className="drawer-title">Barber Shop</h4>
      <Divider color="white" />
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.heading}
            disablePadding
            button
            component={NavLink}
            end
            to={item.page}
            style={({ isActive }) =>
              isActive
                ? {
                    backgroundColor: theme.palette.primary.main,
                  }
                : {}
            }
          >
            <ListItemButton
              onClick={handleDrawerToggle}
              sx={{ textAlign: "center" }}
            >
              {item.icon}
              <ListItemText primary={item.heading} className="list-item" />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
        <AppBar position="static" component="nav" className="app-bar">
          <Toolbar className="container">
            <div className="logo-div">
              <Link href="/">
                <img src={logo} alt="Barber shop logo" className="logo" />
              </Link>
            </div>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <MenuIcon className="icons" onClick={handleDrawerToggle} />
            </IconButton>
            <Box
              sx={{
                position: "absolute",
                right: 10,
                display: { xs: "none", md: "block" },
              }}
            >
              <div className="navlinks-div">
                {navItems.map((navItem) => (
                  <NavLink
                    end
                    style={({ isActive }) =>
                      isActive
                        ? {
                            color: theme.palette.primary.main,
                            textDecoration: "none",
                            borderBottom:
                              "1px solid" + theme.palette.primary.main,
                          }
                        : { color: "#545e6f", textDecoration: "none" }
                    }
                    to={navItem.page}
                    className="navlinks"
                  >
                    {navItem.icon}
                    {navItem.heading}
                  </NavLink>
                ))}
              </div>
            </Box>
          </Toolbar>
        </AppBar>
      <Box component="nav">
        <Drawer
          anchor="right"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: "black",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </ThemeProvider>
  );
}

export default Navbar;
