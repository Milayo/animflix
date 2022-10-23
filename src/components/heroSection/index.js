import React from "react";
import { styled } from "@mui/material";
import BackgroundImage from "../../assets/herosection.jpg";
import Header from "../header";


const Wrapper = styled("div")`
  height: 100vh;
  border-radius: 2rem;

  ::before {
    content: "";
    background-image: url(${BackgroundImage});
    background-size: cover;
    opacity: 0.1;
    background-repeat: no-repeat;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.3;
  }
`;

const HeroSection = () => {
  return (
    <Wrapper>
      <Header/>
    </Wrapper>
  );
};

export default HeroSection;
