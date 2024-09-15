import useData from './useData';
import { GameQuery } from '../app';
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  // parent_platforms: {platform: {id: number, name: string}}[];
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>('/games', { params: { genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id, ordering: gameQuery.sortOrder, search: gameQuery.searchText } },
    [gameQuery]);

export default useGames;
