import React from "react";
import { styled } from "@mui/material";
import theme from "../../themes/theme";
import Header from "../../components/header";
import HeroSection from "../../components/heroSection";

const Wrapper = styled("div")`
  background-color: ${theme.palette.primary.main};
`;

const LandingPage = () => {
  return (
    <Wrapper>
     
      <HeroSection />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis itaque
        recusandae expedita ea quam nobis architecto iure porro omnis tempore
        vel accusantium accusamus, delectus mollitia sapiente harum obcaecati,
        quidem cumque?
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis itaque
        recusandae expedita ea quam nobis architecto iure porro omnis tempore
        vel accusantium accusamus, delectus mollitia sapiente harum obcaecati,
        quidem cumque?
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis itaque
        recusandae expedita ea quam nobis architecto iure porro omnis tempore
        vel accusantium accusamus, delectus mollitia sapiente harum obcaecati,
        quidem cumque?
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis itaque
        recusandae expedita ea quam nobis architecto iure porro omnis tempore
        vel accusantium accusamus, delectus mollitia sapiente harum obcaecati,
        quidem cumque?
      </div>
    </Wrapper>
  );
};

export default LandingPage;
