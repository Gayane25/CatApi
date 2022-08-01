import styled from 'styled-components';

export const CatPictureStyled = styled.div`
        width:400px;
        height:350px;
        margin:15px;
 
    img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width:100%;
        height:100%;
        object-fit: cover;
        /* width:100%; */
        border-radius: 20px;
        /* box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); */
        padding:11px;
    }
    img:hover {
  box-shadow: 0 0 2px 1px rgba(235, 122, 52, 0.5);
 
}
`;