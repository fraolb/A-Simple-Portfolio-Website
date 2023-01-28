import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Phila!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const name=["Dudu", "Baba", "Pepe","Lulu"]
const bioTop =[
  {
   title : "frontend",
   specialized : "React"
  },
  {
   title : "backend",
   specialized :"Python"
  },
  {
   title : "UI/UX",
   specialized:"Figma"
  },
  {
   title : "fullstack",
   specialized:"JavaScript"
  },
  {
   title : "web3",
   specialized:"JavaScript"
  },
]

const bio = bioTop[Math.floor(Math.random()*bioTop.length)]
// Implement the UI for the LandingSection component 
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Avatar src="https://i.pravatar.cc/" size='xl'/>
    <VStack>
      <div>Hello, I am {name[Math.floor(Math.random() * name.length)]}</div>
      <Heading>A {bio.title} developer</Heading>
      <Heading>specialised in {bio.specialized}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
