import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { getDataAsync } from "../redux/getDataAsync";
import CatPicture from "../components/CatPicture";
import { ContainerStyled } from "../components/ContainerStyled";
import Button from "../components/Button";

function Home() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const data = useSelector((state) => state.data);
  console.log(data);
  useEffect(() => {
    dispatch(getDataAsync(page));
  }, [dispatch, page]);

  return (
    <>
      <Header />
      <ContainerStyled>
        {data.map((catImg) => (
          <CatPicture key={catImg.id} catImg={catImg} />
        ))}
      </ContainerStyled>
      <Button page={page} setPage={setPage} />
    </>
  );
}

export default Home;
