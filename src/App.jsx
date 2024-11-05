import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { ShopPage } from "./pages/ShopPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ShopPage />
    </>
  );
}

export default App;
