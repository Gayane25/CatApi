import React from "react";
import { CatPictureStyled } from "./CatPictureStyled";

export default function CatPicture({ catImg }) {
  return (
    <CatPictureStyled>
      <img src={catImg.url} alt="cat_pic" />
    </CatPictureStyled>
  );
}
