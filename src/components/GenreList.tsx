import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import  useGenres from "../hooks/useGenres"
import getCroppedImagsUrl from "../services/image-url";

const GenreList = () => {
    const {data} = useGenres();
   return (
    <List>
           {data.map(genre => <HStack>
               <ListItem key={genre.id} paddingY="5px">
                   <Image boxSize="32px" borderRadius={8} objectFit="cover" src={getCroppedImagsUrl(genre.image_background)} />
               </ListItem>
               <Text fontSize="lg">{genre.name}</Text>
           </HStack>)}
    </List>
    )
}

export default GenreList;