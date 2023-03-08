import { Button, useColorMode } from '@chakra-ui/react'
import React from 'react'
import {FaSun, FaMoon} from "react-icons/fa"

const ToggleColorModeBtn = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Button onClick={toggleColorMode}>
          {colorMode === 'light' ? <FaMoon /> : <FaSun />}
        </Button>
    )
}

export default ToggleColorModeBtn