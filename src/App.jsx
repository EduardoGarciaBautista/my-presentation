import Loader from "./ui/Loader";
import Landing from "./pages/landing";
import MenuProvider from "./contexts/MenuContext";

function App() {
  return (
    <>
      {/* <Loader /> */}
      <MenuProvider>
          <Landing />
        </MenuProvider>
    </>
  );
}

export default App;
