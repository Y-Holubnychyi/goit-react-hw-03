import css from "./SearchBox.module.css";

function SearchBox({ value, onChange }) {
  return (
    <div className={css.searchWrapper}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={css.searchInput}
        placeholder="Search contacts..."
      />
    </div>
  );
}

export default SearchBox;
