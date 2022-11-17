import "./Products.scss";
import { dataItem } from "./../../../data/data";
import Product from "../../common/Product/Product";

const Products = () => {


  const filterData = dataItem.filter((d) => d.id <= 3);

  return (
    <section className="cars">
      <div className="cars-container container">
        <h4 className="cars-container__title text-center">نمایشگاه آنلاین</h4>
        <div className="cars-container__wraps">
          {filterData.map((item) => (
            <Product item={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
