import React from "react";
import theme from "../../themes/theme.js";
import SearchIcon from "@mui/icons-material/Search";
import { Container, Box, Typography, styled } from "@mui/material";

const Wrapper = styled("div")`
  position: sticky;
  top: 0;
  padding: 2rem 10rem;
`;

const ContentWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const SearchBar = styled(Box)({
  display: "flex",
  alignItems: "center",
  width: "30%",
  border: "1px solid white",
  borderRadius: "5rem",
  padding: "1rem 2rem",

  input: {
    border: "none",
    outline: "none",
    fontSize: "2rem",
    width: "100%",
    marginRight: "2rem",
    background: "none",
    caretColor: "white",
    color: "white",

    " ::placeholder": {
      color: "white",
      opacity: "0.3",
    },
  },
});

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <ContentWrapper>
          <Typography variant="logo" color="white">
            Animflix
          </Typography>
          <SearchBar>
            <input placeholder="What do you want to watch?" />
            <SearchIcon sx={{ color: "white"}} />
          </SearchBar>
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
};

export default Header;
