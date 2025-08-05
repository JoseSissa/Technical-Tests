import { useEffect } from 'react';
import { usePokemon } from '../hooks/usePokemon';

export function Error() {
  const { error, setError } = usePokemon();
  useEffect(() => {
    const timerId = setTimeout(() => {
      setError(null);
    }, 5000);
    return () => {
      clearTimeout(timerId);
    };
  }, [error]);

  if (error === null) return;
  return (
    <div className="fixed bottom-4 right-4 flex justify-center items-center max-w-1/2 px-5 py-2 z-50 bg-white text-red-600 rounded-2xl border shadow-2xl">
      {error}
    </div>
  );
}
