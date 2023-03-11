import { Box, Container, Flex, Heading} from '@chakra-ui/react'
import React, { useContext } from 'react'
import UtilityContext from '../contexts/utility-context'
import ToggleColorModeBtn from "./ToggleColorModeBtn"
import {Link as RouterLink} from "react-router-dom"

const Navbar = () => {
  const uCtx = useContext(UtilityContext)

  return (
    <Box p={3} boxShadow="xl">
      <Container maxW={uCtx.maxWidth}>
        <Flex alignItems="center" justifyContent="space-between">
          <Heading as={RouterLink} to="/" size="xl">
            AnimeHouse
          </Heading>
          <ToggleColorModeBtn />
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar