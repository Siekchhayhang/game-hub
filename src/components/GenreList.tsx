import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImagsUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selecteedGenre: Genre | null;
}

const GenreList = ({ selecteedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading === true) return <Spinner />;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <HStack>
            <ListItem key={genre.id} paddingY="5px">
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImagsUrl(genre.image_background)}
              />
            </ListItem>
            <Button
              whiteSpace="normal"
              textAlign="left"
              fontWeight={selecteedGenre?.id === genre.id ? "bold" : "normal"}
              onClick={() => onSelectGenre(genre)}
              key={genre.id}
              variant="link"
              fontSize="lg"
            >
              {genre.name}
            </Button>
          </HStack>
        ))}
      </List>
    </>
  );
};

export default GenreList;
