import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";

const StyledAppBar = styled(AppBar)({
  backgroundColor: "white",
    color: "grey",
});

const Navbar = () => {

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <IconButton edge="end" color="inherit">
          <img
            src="logo.jpeg"
            alt="Logo"
            style={{ height: "40px", width: "auto" }}
          />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <Button color="inherit" href="/">
          About Us
        </Button>
        <Button color="inherit" href="/">
          Blog
        </Button>
        <Button color="inherit" href="/">
          Contact Us
        </Button>
        <Button
          color="inherit"
          href="/"
          variant="outlined"
          sx={{ marginLeft: 2 }}>
          Download App
        </Button>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
