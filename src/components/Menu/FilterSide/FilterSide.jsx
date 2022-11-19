import { useState } from "react";
import Selected from "./../../common/Selected/Selected";
import SearchBar from "./../../common/SearchBar/Searchbar";
import { useRentDispatch } from "../../../context/rentProvider";

const Modeloptions = [
  { value: "", label: "همه" },
  { value: "honda", label: "هوندا" },
  { value: "porsche", label: "پورشه" },
  { value: "chevrolet", label: "شورلت" },
  { value: "hyundai", label: "هیوندا" },
  { value: "toyota", label: "تویوتا" },
];
const Yearoptions = [
  { value: "2020", label: "2020" },
  { value: "2019", label: "2019" },
  { value: "2018", label: "2018" },
  { value: "2017", label: "2017" },
];
const Priceoptions = [
  { value: "lowest", label: "ارزان ترین" },
  { value: "highest", label: "گران ترین" },
];

const FilterSide = ({ search, setSearch }) => {
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useRentDispatch();

  const changePriceHandler = (Priceoptions) => {
    dispatch({ type: "SORT_PRICE", Priceoptions });
    setPrice(Priceoptions);
  };

  const changeYearHandler = (Yearoptions) => {
    dispatch({ type: "SORT_YEAR", Yearoptions });
    setYear(Yearoptions);
  };

  const changeModelHandler = (Modeloptions) => {
    dispatch({ type: "SORT_MODEL", Modeloptions });
    setModel(Modeloptions);
  };

  return (
    <div className="menu-container__filter">
      <div className="menu-container__filter-title">فیلتربندی بر اساس</div>
      <div className="menu-container__filter-items">
        <SearchBar search={search} setSearch={setSearch} />
        <Selected
          place="مدل ماشین"
          onChange={changeModelHandler}
          value={model}
          options={Modeloptions}
        />
        <Selected
          place="سال تولید"
          value={year}
          options={Yearoptions}
          onChange={changeYearHandler}
        />
        <Selected
          place="قیمت ماشین"
          onChange={changePriceHandler}
          value={price}
          options={Priceoptions}
        />
      </div>
    </div>
  );
};

export default FilterSide;
