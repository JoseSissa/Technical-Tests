type HeaderProps = {
  setSearch: (search: string) => void;
  search: string;
  fetchUniqPokemon: () => void;
};

export default function Header({
  search,
  setSearch,
  fetchUniqPokemon,
}: HeaderProps) {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchUniqPokemon();
  };
  return (
    <header className="py-4 bg-[#E3350D] border-b-2 border-black">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6">
        <div className="my-2">
          <img src="/logo.webp" alt="Pokedex" />
        </div>
        <p className="mb-2 text-sm font-[500] text-center text-white">
          Search for a Pokemon by name or using the National Pokédex number.
        </p>
        <div>
          <form className="flex items-center gap-2" onSubmit={handleSearch}>
            <input
              className="min-w-52 h-8 px-2 py-1 rounded-sm bg-white text-sm"
              type="text"
              name="search"
              id="search"
              placeholder="Search by name"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <button
              className="border-[1px] border-white p-1 rounded-sm"
              type="submit"
            >
              <img src="/input-search-bg.png" alt="Search" />
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}
