import styled from "styled-components"
import { Button } from "../assets/Button"
import { useState } from "react"

const StyledLikeContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  `

export const LikeButton = (props) => {
  const [likes, setLikes] = useState(0);

  return (
    <StyledLikeContainer>
      <Button variant="like">❤️</Button>
      <p> x {props.likes}</p>
    </StyledLikeContainer>
  )
}