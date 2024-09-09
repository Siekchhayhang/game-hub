import { Card, CardBody, Heading, HStack, Image} from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import PlatFormList from './PlatFormList'
import MetaCritic from './MetaCritic'
import getCroppedImagsUrl from '../services/image-url'

interface Props {
    game: Game
}

const GameCards = ({game}: Props) => {
  return (
      <Card >
          <Image src={getCroppedImagsUrl (game.background_image)} objectFit="cover" />
          <CardBody>
              <Heading fontSize={20}>{game.name}</Heading>
              <HStack justifyContent={"space-between"}>
                  <PlatFormList platforms={game.parent_platforms.map((p) => p.platform)} />
                  <MetaCritic score={game.metacritic} />
              </HStack>
          </CardBody>
      </Card>
  )
}

export default GameCards