import "./Selected.scss";
import Select from "react-select";

const Selected = ({ place, ...restProps }) => {
  return (
    <div className="select">
      <Select placeholder={place} {...restProps} />
    </div>
  );
};

export default Selected;
