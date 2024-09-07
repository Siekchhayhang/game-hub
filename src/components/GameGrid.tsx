import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCards from './GameCards';

const GameGrid = () => {
 const {error, games} = useGames();

  return (
   <>
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} padding={5} spacing={5}>
    {games.map((game) => (
        <GameCards key={game.id} game={game}/>
    ))}
    </SimpleGrid>
   </>
  )
}

export default GameGrid

