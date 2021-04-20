import { useState, useEffect } from "react";

const usePromise = (promiseCreator, deps) => {
  const [loading, setLoading] = useState(false);
  const [resolved, setResoved] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const resolved = await promiseCreator();
        setResoved(resolved);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchNews();
  }, deps);
  return [loading, resolved, error];
};

export default usePromise;
