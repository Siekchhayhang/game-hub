import { Grid, GridItem, Show } from '@chakra-ui/react'
import './app.css'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import PlateformSelector from './components/PlateformSelector'
import { useState } from 'preact/hooks'
import { Genre } from './hooks/useGenres'

export function App() {
  
 const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);


  return (
    <Grid templateAreas={{base: `"nav" "main"`, lg: `"nav nav" "aside main"`}} templateColumns={{base: "1fr", lg: "200px 1fr"}}>
       <GridItem area='nav' >
        <NavBar/>
        </GridItem>
        <Show above="lg">
        <GridItem area='aside'  paddingX={5}>
        <GenreList selecteedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)}/>
        </GridItem>
        </Show>
      <GridItem area='main' >
        <PlateformSelector/>
        <GameGrid selectedGenre={selectedGenre} />
        </GridItem> 
    </Grid>
  )
}
