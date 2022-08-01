import React from "react";
import { useSelector } from "react-redux";
import { StyledHeader } from "./HeaderStyled";
import PawLogo from "./PawLogo";


function Header() {
  const categories = useSelector((state) => state);
  console.log(categories);

  return (
    <StyledHeader>
      <PawLogo />
    </StyledHeader>
  );
}

export default Header;
