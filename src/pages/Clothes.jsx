import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { getDatabyCategoriesAsync } from "../redux/getDatabyCategoriesAsync";
import { catwithId } from "../categorieswithId";
import { ContainerStyled } from "../components/ContainerStyled";
import CatPicture from "../components/CatPicture";
import Button from "../components/Button";
function Clothes() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(getDatabyCategoriesAsync(page, catwithId.clothes));
  }, [dispatch, page]);
  return (
    <>
      <Header />
      <ContainerStyled>
        {data.map((catImg) => (
          <CatPicture key={catImg.id + Math.random()} catImg={catImg} />
        ))}
      </ContainerStyled>
      <Button setPage={setPage} page={page} />
    </>
  );
}

export default Clothes;
