import { usePokemon } from '../hooks/usePokemon';

export function Loading() {
  const { loading } = usePokemon();
  if (!loading) return null;
  return (
    <div className="absolute inset-0 w-full h-full flex justify-center items-center z-50 bg-black/50">
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    </div>
  );
}
