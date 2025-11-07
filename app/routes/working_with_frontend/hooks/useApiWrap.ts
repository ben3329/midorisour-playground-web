import { useCallback, useState } from "react";

export type LoadingMap = { [k: string]: boolean };

export default function useApiWrap() {
  const [loading, setLoading] = useState<LoadingMap>({});
  const [error, setError] = useState<string | null>(null);

  const resetError = useCallback(() => setError(null), []);

  const wrap = useCallback(async <T,>(key: string, fn: () => Promise<T>) => {
    setError(null);
    setLoading((s) => ({ ...s, [key]: true }));
    try {
      return await fn();
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      setError(msg);
      return undefined as unknown as T;
    } finally {
      setLoading((s) => ({ ...s, [key]: false }));
    }
  }, []);

  return { loading, error, resetError, wrap } as const;
}

