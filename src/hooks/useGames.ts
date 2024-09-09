import {useEffect, useState } from 'react'
import ApiClient from '../services/api_client';
import { CanceledError } from 'axios';

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

interface FetchGamesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Game[];
}

const useGames = () => {
  const [games, setGames]=  useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
      const controller = new AbortController();
      setIsLoading(true);
        ApiClient.get<FetchGamesResponse>("/games", {signal: controller.signal})
        .then((res) => 
            {setGames(res.data.results)
            setIsLoading(false);
            })
        .catch((err) => {
          if(err instanceof CanceledError) return;
          setError(err.message)
          setIsLoading(false);
        }
        )
        return () => controller.abort();
    }, [])
  return {games, error, isLoading};
}

export default useGames;
