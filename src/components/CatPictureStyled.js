import styled from "styled-components";

export const CatPictureStyled = styled.div`
  width: 400px;
  height: 350px;
  margin: 15px;

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    padding: 11px;
  }
  img:hover {
    box-shadow: 0 0 2px 1px rgba(235, 122, 52, 0.5);
  }
`;
