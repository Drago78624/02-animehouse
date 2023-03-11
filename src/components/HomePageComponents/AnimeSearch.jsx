import {
  Box,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const AnimeSearch = () => {
  const [enteredAnimeName, setEnteredAnimeName] = useState("");
  return (
    <Box>
      <Heading size="lg">Search Anime</Heading>
      <FormControl my={3}>
        <InputGroup>
          <Input
            type="text"
            placeholder="e.g Naruto"
            value={enteredAnimeName}
            onChange={(e) => setEnteredAnimeName(e.target.value)}
          />
          <InputRightElement pointerEvents="none" children={<FaSearch />} />
        </InputGroup>
        <FormErrorMessage></FormErrorMessage>
      </FormControl>
    </Box>
  );
};

export default AnimeSearch;
