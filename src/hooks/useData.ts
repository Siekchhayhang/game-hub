import { CanceledError } from "axios";
import { useState, useEffect } from "preact/hooks";
import ApiClient from "../services/api_client";

interface FetchResponse<T> {
    count: number
    next: string | null
    previous: string | null
    results: T[]
}

const useData =<T> (endpoint: string) => {
    const [data, setUseData]=  useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
      useEffect(() => {
        const controller = new AbortController();
        setIsLoading(true);
          ApiClient.get<FetchResponse<T>>(endpoint, {signal: controller.signal})
          .then((res) => 
              {setUseData(res.data.results)
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
    return {data, error, isLoading};
}

export default useData;