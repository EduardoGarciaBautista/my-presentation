import MenuProvider from "./contexts/MenuContext";
import { Suspense, lazy } from "react";
import Loader from "./ui/Loader";
const Landing = lazy(() => import("./pages/landing"));

function App() {
  return (
    <Suspense fallback={<Loader type="text" />}>
      <MenuProvider>
        <Landing />
      </MenuProvider>
    </Suspense>
  );
}

export default App;
