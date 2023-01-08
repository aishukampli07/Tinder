import React from "react";
import styled from "styled-components";

const ICON = styled.i`
  font-size: 1.5rem;
  padding: 0.3rem;
  cursor: pointer;
  padding: 1rem;
 
`;
const FooterWrapper = styled.div`
  width: 300px;
  max-height: 500px;
  display: flex;
  justify-content: space-between;
 
`;
const Footer = () => {
  return (
    <FooterWrapper style={{ marginTop: "20rem" }}>
      <ICON
        style={{
          color: "rgb(251, 187, 50)"
        }}
        className="fas fa-redo"
      ></ICON>
      <ICON
        style={{
          color: "rgb(254, 60, 114)"
        }}
        className="fas fa-times"
      ></ICON>
      <ICON
        style={{
          color: "rgb(130, 102, 179)"
        }}
        className="fas fa-bolt"
      ></ICON>
      <ICON
        style={{
          color: "rgb(28, 231, 199)"
        }}
        className="fas fa-heart"
      ></ICON>
      <ICON
        style={{
          color: "rgb(29, 181, 206)"
        }}
        className="fas fa-star"
      ></ICON>
    </FooterWrapper>
  );
};
export default Footer;