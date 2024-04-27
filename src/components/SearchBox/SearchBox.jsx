import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../redux/contactsSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const search = useSelector(selectNameFilter);

  const onFilter = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.div}>
      <p>Find contacts by name</p>
      <input type="text" value={search} onChange={onFilter} />
    </div>
  );
};

export default SearchBox;
