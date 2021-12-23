import React from "react";
import { NavbarWrapper } from "./styles/NavbarStyles";

function Navbar({ open }) {
  return (
    <NavbarWrapper open={open}>
      <a href="#page-top">Link</a>
      <a href="#services">Link</a>
      <a href="#">Link</a>
      <a href="#">Link</a>
    </NavbarWrapper>
  );
}

export default Navbar;