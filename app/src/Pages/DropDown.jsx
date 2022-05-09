import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Main = styled("div")`
  font-family: sans-serif;
  ${'' /* background: #f0f0f0; */}
  ${'' /* height: 100vh; */}
`;

const DropDownContainer = styled("div")`
  width: 10.5em;
  margin: 0 auto;
  color:black;
`;

const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  ${'' /* padding: 0.4em 2em 0.4em 1em; */}
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: black;
  background: #ffffff;
`;

const DropDownListContainer = styled("div")`
${'' /* margin-top:30px */}
color:black;
`
;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
 
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;

export default function App1() {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  const navigate=useNavigate()

  return (
    <Main>
      
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>Mangoes</DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              <ListItem onClick={()=>navigate("/deals")}>Mangoes</ListItem>
              <ListItem>Apples</ListItem>
              <ListItem>Oranges</ListItem>
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Main>
  );
}