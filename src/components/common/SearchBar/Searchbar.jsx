import { RiSearch2Line } from "react-icons/ri";
import "./Searchbar.scss";

const SearchBar = ({ search, setSearch }) => {
  return (
    <form className="forms">
      <input
        type="text"
        placeholder="جست و جو ..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <span>
        <RiSearch2Line size={28} />
      </span>
    </form>
  );
};

export default SearchBar;
