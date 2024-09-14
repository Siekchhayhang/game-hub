import useData from './useData';
import { Genre } from './useGenres';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform: Platform}[];
  // parent_platforms: {platform: {id: number, name: string}}[];
  metacritic: number;
}

const useGames = (selectedGenre: Genre | null, selectedPlateform: Platform | null) =>
  useData<Game>('/games', { params: { genres: selectedGenre?.id, platforms: selectedPlateform?.id } },
    [selectedGenre?.id, selectedPlateform?.id]);

export default useGames;
