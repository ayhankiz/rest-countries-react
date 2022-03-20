import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async function () {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(
          "Country doesn't exist. Make sure you spelled it correctly"
        );
      }

      const data = await response.json();
      setData(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error };
}
