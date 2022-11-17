import "./Product.scss";
import { comma } from "./../../../utils/Comma";
import { Link, useNavigate } from "react-router-dom";
import { useRentDispatch } from "./../../../context/rentProvider";
const Product = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useRentDispatch();

  const handleSubmit = (item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
    navigate("/register");
  };

  return (
    <div className="box" key={item.id}>
      <img src={item.image} alt="rent" />

      <p className="box-model">{item.model}</p>
      <h3 className="box-name">{item.name}</h3>
      <div className="box-price">
        <div className="box-price__right">
          <span>{comma(item.price)}</span>
          <span>اجاره ماهیانه</span>
        </div>
        <Link
          target={"_blank"}
          to={`/store/${item.id}`}
          className="box-price__more"
        >
          اطلاعات بیشتر
        </Link>
      </div>
      <button className="box-btn" onClick={() => handleSubmit(item)}>
        اجاره ماشین
      </button>
    </div>
  );
};

export default Product;
