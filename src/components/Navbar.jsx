
// export default Navbar;
import React, { useState } from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    setQuery(event.target.value);
    console.log("Searching for:", event.target.value); // Placeholder for search logic
  };

  return (
    <Nav>
      <Logo>EventSpot Lite</Logo>

      {/* Search Container with Fixed Input and Icon */}
      <SearchContainer>
        <FiSearch className="search-icon" size={20} />
        <SearchInput
          type="text"
          placeholder="Search events"
          value={query}
          onChange={handleSearch}
        />
      </SearchContainer>

      <NavMenu>
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#our-work">Our Work</a>
        <a href="#register">Register</a>
      </NavMenu>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  z-index: 3;
`;

const Logo = styled.div`
  font-family: Verdana, Geneva, sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: white;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f3f3f3;
  border-radius: 4px;
  padding: 6px 10px;
  width: 250px;
  .search-icon {
    color: gray;
    margin-right: 8px;
  }
`;

const SearchInput = styled.input`
  background: none;
  border: none;
  outline: none;
  width: 100%;
  color: #333;
  font-size: 14px;
  &::placeholder {
    color: #888;
  }
`;

const NavMenu = styled.div`
  display: flex;
  gap: 16px;
  a {
    color: #f9f9f9;
    font-size: 13px;
    text-decoration: none;
    padding: 0 12px;
    &:hover {
      color: #1a73e8;
    }
  }
`;

export default Navbar;
