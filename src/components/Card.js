import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <div key={title} style={{ backgroundColor: "white", color: "black", borderRadius: 17 }}>
      <Image src={imageSrc} style={{ borderRadius: 17 }} />
      <div style={{ paddingLeft: 15, paddingTop:15, paddingRight:20, paddingBottom:15 }}>
        <Heading>{title}</Heading>
        <Text>{description}</Text>
        <HStack>
          <small style={{ font: "bold", fontWeight: 700 }}>See more</small>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </div>
    </div>
  );
};

export default Card;
