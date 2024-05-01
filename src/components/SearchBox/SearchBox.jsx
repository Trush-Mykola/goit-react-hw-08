import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/contacts/selectors";

import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const search = useSelector(selectNameFilter);

  const onFilter = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.div}>
      <p>Find contacts by name or number</p>
      <input type="text" value={search} onChange={onFilter} />
    </div>
  );
};

export default SearchBox;
