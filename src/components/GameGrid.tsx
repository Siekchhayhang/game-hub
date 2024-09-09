import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCards from './GameCards';
import GameCardSkeleton from './GameCardSkeleton';

const GameGrid = () => {
 const {error, games, isLoading} = useGames();
 const skeleton = [1,2,3,4,5,6,7,8];

  return (
   <>
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} padding={5} spacing={5}>
    {isLoading && skeleton.map((skeleton) => (
        <GameCardSkeleton key={skeleton} />
    ))}
    {games.map((game) => (
        <GameCards key={game.id} game={game}/>
    ))}
    </SimpleGrid>
   </>
  )
}

export default GameGrid

