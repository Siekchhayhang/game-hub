import { Card, CardBody, Heading, Image } from '@chakra-ui/react'
import { Game } from '../hooks/useGames'

interface Props {
    game: Game
}

const GameCards = ({game}: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
        <Image src={game.background_image} />
        <CardBody>
            <Heading fontSize={15}>{game.name}</Heading>
        </CardBody>
    </Card>
  )
}

export default GameCards