import { useContext, createContext, useReducer } from "react";
import { dataItem } from "./../data/data";

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
    case "SORT_ITEM": {
    }
    case "SEARCH_ITEM": {
      const value = action.event.target;
      if (value === "") {
        return dataItem;
      } else {
        const filterValue = dataItem.filter((data) =>
          data.name.includes(value)
        );
        return filterValue;
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
