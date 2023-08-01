import { useDispatch } from "react-redux";
import Select from "react-select";
import { addFilter } from "../../redux/filterSlice";
import { styleSelect } from "./filter.styled";

const options = [
  { value: "showAll", label: "Show All" },
  { value: "follow", label: "Follow" },
  { value: "following", label: "Following" },
];

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Select
      name="filter"
      placeholder="Select your filter..."
      onChange={({ value }) => {
        dispatch(addFilter(value));
      }}
      options={options}
      styles={styleSelect}
    />
  );
};
