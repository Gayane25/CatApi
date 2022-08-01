import React from 'react'
import {StyledButton} from "./ButtonStyled"
function Button({page,setPage}) {
  return (
    <StyledButton>
        <button onClick={()=>setPage(page+1)}>Show More</button>
    </StyledButton>
  )
}

export default Button;