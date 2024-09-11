import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCards from './GameCards';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';

const GameGrid = () => {
 const {error, data, isLoading} = useGames();
 const skeleton = [1,2,3,4,5,6,7,8];

  return (
   <>
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} padding={5} spacing={3}>
    {isLoading && skeleton.map((skeleton) => (
        <GameCardContainer>
          <GameCardSkeleton key={skeleton} />
        </GameCardContainer>
    ))}
    {data.map((game) => (
        <GameCardContainer>
          <GameCards key={game.id} game={game}/>
        </GameCardContainer>
    ))}
    </SimpleGrid>
   </>
  )
}

export default GameGrid

