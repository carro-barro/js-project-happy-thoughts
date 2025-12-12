import styled from "styled-components"
import { Button } from "../assets/Button"
import { useState, useEffect } from "react"

const StyledLikeContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  `

export const LikeButton = ({ likes, _id, onLike }) => {
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    const savedItem = localStorage.getItem("likedThoughts")

    const saved = savedItem ? JSON.parse(savedItem) : []

    setIsLiked(saved.includes(_id))
  }, [_id])

  const handleClick = () => {
    if (isLiked) return

    onLike(_id)

    const savedItem = localStorage.getItem("likedThoughts")

    const saved = savedItem ? JSON.parse(savedItem) : []

    const updated = [...saved, _id]
    localStorage.setItem("likedThoughts", JSON.stringify(updated))

    setIsLiked(true)
  }

  return (
    <StyledLikeContainer>
      <Button
        variant="like"
        onClick={handleClick}
        $isClicked={isLiked}
        disabled={isLiked}
      >❤️
      </Button>
      <p> x {likes}</p>
    </StyledLikeContainer>
  )
}