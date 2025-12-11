import styled from "styled-components"
import { Button } from "../assets/Button"
import { useState } from "react"

const StyledLikeContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  `

export const LikeButton = ({ likes, _id, onLike }) => {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(prevIsClicked => !prevIsClicked)

    if (!isClicked) {
      onLike(_id)
    }
  }

  return (
    <StyledLikeContainer>
      <Button
        variant="like"
        onClick={handleClick}
        $isClicked={isClicked}>❤️
      </Button>
      <p> x {likes}</p>
    </StyledLikeContainer>
  )
}