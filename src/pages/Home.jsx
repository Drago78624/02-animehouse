import { Container } from '@chakra-ui/react'
import React, { useContext } from 'react'
import Animes from '../components/HomePageComponents/Animes'
import AnimeSearch from '../components/HomePageComponents/AnimeSearch'
import UtilityContext from '../contexts/utility-context'

const Home = () => {
  const uCtx = useContext(UtilityContext)
  return (
    <Container maxW={uCtx.maxWidth} py={5}>
      <AnimeSearch />
      <Animes />
    </Container>
  )
}

export default Home