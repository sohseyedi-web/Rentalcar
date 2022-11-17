import "./Menu.scss";
import Container from "./../../container/Container";
import { dataItem } from "./../../data/data";
import Product from "./../common/Product/Product";
import Helmet from "react-helmet";
import Select from "react-select";
import SearchBar from "./../common/SearchBar/Searchbar";
import { useState } from "react";

const Modeloptions = [
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

const Menu = () => {
  const [search, setSearch] = useState("");
  const handleSearch = () => {
    return dataItem.filter((data) => data.name.toLowerCase().includes(search));
  };

  return (
    <Container>
      <Helmet>
        <title>نمایشگاه</title>
      </Helmet>
      <section className="menu">
        <div className="menu-container">
          <div className="menu-container__filter">
            <div className="menu-container__filter-title">
              فیلتربندی بر اساس
            </div>
            <div className="menu-container__filter-items">
              <div className="menu-container__filter-items__txt">
                <SearchBar search={search} setSearch={setSearch} />
              </div>
              <div className="menu-container__filter-items__txt">
                <Select options={Modeloptions} placeholder="مدل ماشین" />
              </div>
              <div className="menu-container__filter-items__txt">
                <Select options={Yearoptions} placeholder="سال تولید" />
              </div>
              <div className="menu-container__filter-items__txt">
                <Select options={Priceoptions} placeholder="قیمت ماشین" />
              </div>
            </div>
          </div>
          <div className="menu-container__content">
            {handleSearch().map((item) => (
              <Product key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Menu;
