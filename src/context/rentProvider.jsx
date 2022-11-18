import { useContext, createContext, useReducer } from "react";
import { dataItem } from "./../data/data";
import _ from "lodash";

export const rentAction = createContext();
export const rentActionDispatch = createContext();

const initialState = {
  rentCar: [],
  dataCar: dataItem,
};

const rentReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const item = [...state.dataCar];
      const itemIndex = item.findIndex((i) => i.id === action.payload.id);
      const updateItem = { ...item[itemIndex] };
      return { ...state, rentCar: updateItem };
    }
    case "SORT_PRICE": {
      const value = action.Priceoptions.value;
      const products = [...dataItem];
      if (value === "lowest") {
        return _.orderBy(products, ["price"], ["asc"]);
      } else {
        return _.orderBy(products, ["price", ["desc"]]);
      }
    }
    default:
      return state;
  }
};

const rentProvider = ({ children }) => {
  const [data, dispatch] = useReducer(rentReducer, initialState);

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
