import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <ul>
        <li>
          <a href="#">Privacy &amp; Legal</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">Get Newsletter</a>
        </li>
        <li>
          <a href="#">News</a>
        </li>
        <li>
          <a href="#">Forums</a>
        </li>
        <li>
          <a href="#">Locations</a>
        </li>
      </ul>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  padding: 1rem 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
  ul {
    list-style: none;
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-size: 1.2rem;
    font-weight: 400;
  }
`;
