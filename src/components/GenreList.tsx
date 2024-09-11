import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import  useGenres from "../hooks/useGenres"
import getCroppedImagsUrl from "../services/image-url";

const GenreList = () => {
    const { data, isLoading, error } = useGenres();
    if(error) return null;
    if(isLoading===true) return <Spinner />
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