import "./Menu.scss";
import Container from "./../../container/Container";
import { dataItem } from "./../../data/data";
import { useState, useEffect } from "react";
import Helmet from "react-helmet";
import Product from "./../common/Product/Product";
import FilterSide from "./FilterSide/FilterSide";
import { useRent } from "../../context/rentProvider";

const Menu = () => {
  const data = useRent();
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    return data.filter((d) => d.name.toLowerCase().includes(search));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);

  return (
    <Container>
      <Helmet>
        <title>نمایشگاه</title>
      </Helmet>
      <section className="menu">
        <div className="menu-container container-fluid">
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
