import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Container, Box, Typography, styled } from "@mui/material";

const Wrapper = styled("div")`
  padding: 3rem 10rem;
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
  border: "1px solid grey",
  borderRadius: "5rem",
  padding: "1rem 2rem",

  input: {
    border: "none",
    outline: "none",
    fontSize: "2rem",
    width: "100%",
    marginRight: "2rem",
  },
});

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <ContentWrapper>
          <Typography variant="logo" color="text.secondary">
            Animflix
          </Typography>
          <SearchBar>
            <input placeholder="What do you want to watch?" />
            <SearchIcon color="primary" />
          </SearchBar>
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
};

export default Header;
