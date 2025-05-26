type SearchBarProps = {
    searchTerm: string;
    setSearchTerm: (value: string) => void;
};

const SearchBar = ({ searchTerm, setSearchTerm }: SearchBarProps) => {
    return (
        <div>
            <input
                id="search-bar"
                className="text-[clamp(0.875rem,1.2vw,1.25rem)] border border-gray-300 hover:border-gray-800 text-gray-700 rounded-md px-[clamp(0.5rem,1vw,1rem)] py-[clamp(0.4rem,0.9vw,0.75rem)] w-[clamp(10rem,100%,40rem)] max-w-full"
                placeholder="Search reviews"
                value={searchTerm}
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                }}
            />
        </div>
    );
};

export default SearchBar;
