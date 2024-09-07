import {useEffect, useState } from 'react'
import ApiClient from '../services/api_client';
import { Text } from '@chakra-ui/react';

interface Game {
    id: number;
    name: string;
}

interface FetchGamesResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Game[];
}

const GameGrid = () => {
  const [games, setGames]=  useState<Game[]>([]);
  const [error, setError] = useState("");

    useEffect(() => {
        ApiClient.get<FetchGamesResponse>("/games")
        .then((res) => 
            setGames(res.data.results))
        .catch((err) => setError(err.message))
    }, [])


  return (
   <div>
    {error && <Text>{error}</Text>}
    <ul>
    {games.map((game) => (
        <li key={game.id}>{game.name}</li>
    ))}
    </ul>
   </div>
  )
}

export default GameGrid

