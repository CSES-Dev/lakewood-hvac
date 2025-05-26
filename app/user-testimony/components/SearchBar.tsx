type SearchBarProps = {
    searchTerm: string;
    setSearchTerm: (value: string) => void;
};

const SearchBar = ({ searchTerm, setSearchTerm }: SearchBarProps) => {
    return (
        <div>
            <input
                id="search-bar"
                className="border border-gray-300 hover:border-gray-800 text-gray-700 rounded-md p-3 w-full"
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
