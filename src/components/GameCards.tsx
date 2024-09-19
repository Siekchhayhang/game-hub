import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatFormList from "./PlatFormList";
import MetaCritic from "./MetaCritic";
import getCroppedImagsUrl from "../services/image-url";
import Emojis from "./Emojis";

interface Props {
  game: Game;
}

const GameCards = ({ game }: Props) => {
  return (
    <Card>
      <Image
        src={getCroppedImagsUrl(game.background_image)}
        objectFit="cover"
      />
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <PlatFormList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <MetaCritic score={game.metacritic} />
        </HStack>
        <Heading fontSize={20}>
          {game.name} <Emojis rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCards;
