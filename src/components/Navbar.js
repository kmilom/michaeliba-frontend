import React from "react";
import { NavbarWrapper } from "./styles/NavbarStyles";

function Navbar({ open }) {
  return (
    <NavbarWrapper open={open}>
      <a href="#about">Sobre nosotros</a>
      <a href="#services">Servicios</a>
      <a href="#benefits">Beneficios</a>
      <a href="#contact">Contáctanos</a>
    </NavbarWrapper>
  );
}

export default Navbar;