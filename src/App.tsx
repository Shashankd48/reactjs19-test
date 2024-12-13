import "./App.css";
import HomePage from "./pages/HomePage";
import { NextUIProvider } from "@nextui-org/react";

function App() {
   return (
      <NextUIProvider>
         <HomePage />
      </NextUIProvider>
   );
}

export default App;
