import React from "react"
import styled from "styled-components"

const GridContainer = styled.div` 
  display: flex;
  justify-content: center;
  flex-direction: column;
  grid-gap: 20px;
`

const Home = () => {
  return (
    <GridContainer>
      <div>This is a test</div>
    </GridContainer>
  )
}

export default Home
