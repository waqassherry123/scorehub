import { useEffect, useState } from "react";

export default function useFetch<T>(fetcher: () => Promise<T>) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetcher().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  return { data, loading };
}
