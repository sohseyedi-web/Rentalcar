import "./Menu.scss";
import Container from "./../../container/Container";
import { dataItem } from "./../../data/data";
import { useState } from "react";
import Helmet from "react-helmet";
import Product from "./../common/Product/Product";
import FilterSide from "./FilterSide/FilterSide";

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
          <FilterSide search={search} setSearch={setSearch} />
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
