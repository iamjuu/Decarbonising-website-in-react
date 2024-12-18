import React from 'react'
import {AnimatedTestimonialsDemo} from '../../animations/cards'
import styled from 'styled-components'
const index = () => {
  return (
    <Container>
      <ContainerWrap>
<AnimatedTestimonialsDemo/>
      </ContainerWrap>
    </Container>
  )
}

export default index

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
`
const ContainerWrap = styled.div`
width: 100%;
max-width: 1300px;
display: flex;
justify-content: center;
align-items: center;
@media (max-width:768px) {
  width: 100%;
}
`