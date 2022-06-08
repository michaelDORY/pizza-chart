import {useEffect, useState} from "react";

const useHttp = (func: () => any) => {
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
      func()
        .then((res: any[]) => setState(res))
        .catch((err: Error)=> setError(err.message))
        .finally(() => setLoading(false))
  }, []);

  return {state, loading, error};
}

export default useHttp;
