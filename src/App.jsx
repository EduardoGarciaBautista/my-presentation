import Loader from "./ui/Loader";
import JobsContextProvider from "./contexts/JobsContext";
import Landing from "./pages/landing";
import AppProvider from "./contexts/AppContext";
import MenuProvider from "./contexts/MenuContext";

function App() {
  return (
    <>
      <Loader />
      <AppProvider>
        <JobsContextProvider>
          <MenuProvider>
            <Landing />
          </MenuProvider>
        </JobsContextProvider>
      </AppProvider>
    </>
  );
}

export default App;
