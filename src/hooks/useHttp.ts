import {useEffect, useState} from 'react';

const useHttp = <T>(func: () => any) => {
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
      func()
        .then((res: T) => setState(res))
        .catch((err: Error) => setError(err.message))
        .finally(() => setLoading(false));
  }, []);

  return {state, loading, error};
};

export default useHttp;
