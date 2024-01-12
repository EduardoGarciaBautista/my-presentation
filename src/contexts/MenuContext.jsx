import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import { fetchMenu } from "../services/menuService";
import { useRef } from "react";
import { useFetch } from "../hooks/useFetch";
const initialState = {
  selectedMenu: null,
  menuOptions: [],
  isLoading: false,
};

const MenuContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "menu/select":
      return {
        ...state,
        selectedMenu: action.payload,
        title: action.payload.text,
      };
    case "menu/load":
      return {
        ...state,
        menuOptions: action.payload,
        selectedMenu: action.payload?.[0],
        isLoading: false,
      };
    case "menu/loading":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
}

function MenuProvider({ children }) {
  const [{ selectedMenu, menuOptions, isLoading }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const loading = () =>
    dispatch({
      type: "menu/loading",
    });

  const loadOptions = (data) =>
    dispatch({
      type: "menu/load",
      payload: data,
    });

  const selectOption = (option) =>
    dispatch({
      type: "menu/select",
      payload: option,
    });

  useFetch({ loading, loadData: loadOptions, fetch: fetchMenu });

  return (
    <MenuContext.Provider
      value={{ isLoading, selectedMenu, menuOptions, selectOption }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("The app context must be used within a menu");
  }
  return context;
}

export default MenuProvider;
