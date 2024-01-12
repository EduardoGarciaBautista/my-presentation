import { createContext, useContext, useReducer } from "react";

const AppContext = createContext();

const initialState = {
  title: "Profile",
};

function reducer(state, action) {
  switch (action.type) {
    case "app/title":
      return {
        ...state,
        title: action.payload,
      };
    default:
      return state;
  }
}

function AppProvider({ children }) {
  const [{ title }, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ title, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("The app context must be used within am App context");
  }
  return context;
}

export default AppProvider;
