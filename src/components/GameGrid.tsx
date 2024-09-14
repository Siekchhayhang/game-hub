import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCards from './GameCards';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenres';

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({selectedGenre}: Props) => {
 const {error, data, isLoading} = useGames(selectedGenre);
 const skeleton = [1,2,3,4,5,6,7,8];

  return (
   <>
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} padding={5} spacing={3}>
    {isLoading && skeleton.map((skeleton) => (
        <GameCardContainer key={skeleton}>
          <GameCardSkeleton  />
        </GameCardContainer>
    ))}
    {data.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCards  game={game}/>
        </GameCardContainer>
    ))}
    </SimpleGrid>
   </>
  )
}

export default GameGrid

