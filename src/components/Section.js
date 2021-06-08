import React from "react";
import styled from "styled-components";

function Section({ title, description, bgImage, darkBtnText, lightBtnText }) {
  return (
    <Container bgImage={bgImage}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      <ButtonGroup>
        <DarkButton>{darkBtnText}</DarkButton>
        <LightButton display={lightBtnText}>{lightBtnText}</LightButton>
      </ButtonGroup>
      <DownArrow src="/images/down-arrow.svg" />
    </Container>
  );
}

export default Section;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: ${(props) => `url('/images/${props.bgImage}')`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  flex: 1;
  h1 {
    font-size: 4rem;
    font-weight: 500;
  }
  p {
    font-size: 1.4rem;
    font-weight: 400;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
`;
const DarkButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  color: #fff;
  height: 4rem;
  width: 25rem;
  border-radius: 10rem;
  cursor: pointer;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 1.2rem;
  opacity: 0.9;
  margin: 0.8rem;
`;
const LightButton = styled(DarkButton)`
  background-color: #fff;
  color: rgba(23, 26, 32, 0.8);
  opacity: 0.75;
  display: ${(props) => (props.display === "none" ? "none" : "flex")};
`;

const DownArrow = styled.img`
  cursor: pointer;
  margin-bottom: 4vh;
  height: 4rem;
  animation: animateDown infinite 1.5s;
`;
