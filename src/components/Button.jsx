import React from 'react'
import {StyledButton} from "./ButtonStyled"
function Button({page,setPage}) {
  return (
    <StyledButton onClick={(page)=>setPage(page+1)}>Show More</StyledButton>
  )
}

export default Button