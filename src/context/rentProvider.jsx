import { useContext, createContext, useReducer } from "react";
import { dataItem } from "./../data/data";
import _ from "lodash";

export const rentAction = createContext();
export const rentActionDispatch = createContext();

const rentReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const item = [...state];
      const itemIndex = item.findIndex((i) => i.id === action.payload.id);
      const updateItem = { ...item[itemIndex] };
      updateItem.rentLen++;
      item[itemIndex] = updateItem;
      return item;
    }
    case "SORT_PRICE": {
      const value = action.Priceoptions.value;
      const priceLo = [...state];
      if (value === "highest") {
        return _.orderBy(priceLo, ["price"], ["desc"]);
      } else {
        return _.orderBy(priceLo, ["price", ["asc"]]);
      }
    }
    case "SORT_YEAR": {
      const value = action.Yearoptions.value;
      const filterDataItem = dataItem.filter(
        (d) => d.model.indexOf(value) >= 0
      );
      return filterDataItem;
    }
    case "SORT_MODEL": {
      const value = action.Modeloptions.value;

      if (value === "") {
        return dataItem;
      } else {
        const filterDataModel = dataItem.filter(
          (d) => d.company.indexOf(value) >= 0
        );
        return filterDataModel;
      }
    }
    default:
      return state;
  }
};

const rentProvider = ({ children }) => {
  const [data, dispatch] = useReducer(rentReducer, dataItem);

  return (
    <rentAction.Provider value={data}>
      <rentActionDispatch.Provider value={dispatch}>
        {children}
      </rentActionDispatch.Provider>
    </rentAction.Provider>
  );
};

export default rentProvider;

export const useRent = () => useContext(rentAction);
export const useRentDispatch = () => useContext(rentActionDispatch);
