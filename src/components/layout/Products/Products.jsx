import "./Products.scss";
import Product from "../../common/Product/Product";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useRent } from "../../../context/rentProvider";

const Products = () => {
  const data = useRent();
  const filterData = data.filter((d) => d.id <= 3);

  return (
    <section className="cars">
      <div className="cars-container container">
        <h4 className="cars-container__title text-center">نمایشگاه آنلاین</h4>
        <div className="cars-container__wraps">
          {filterData.map((item) => (
            <Product item={item} key={item.id} />
          ))}
        </div>
        <div className="cars-container__more">
          <Link to={"/store"}>
            موارد بیشتر
            <RiArrowDropDownLine size={28} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
