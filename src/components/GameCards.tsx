import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import PlatFormList from './PlatFormList'
import MetaCritic from './MetaCritic'

interface Props {
    game: Game
}

const GameCards = ({game}: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
        <Image src={game.background_image} />
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