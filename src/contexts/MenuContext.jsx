import { createContext, useContext, useEffect, useReducer } from "react";
import { fetchMenu } from "../services/menuService";
const initialState = {
  selectedMenu: "",
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

  useEffect(() => {
    if (menuOptions.length === 0) {
      (async () => {
        const data = await fetchMenu();
        dispatch({
          type: "menu/load",
          payload: data,
        });
      })();
    }
  }, [menuOptions.length]);

  return (
    <MenuContext.Provider
      value={{ isLoading, selectedMenu, menuOptions, dispatch }}
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
