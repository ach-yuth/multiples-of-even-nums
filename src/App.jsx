import { useState } from "react";
import "./App.css";
import Numbers from "./components/Numbers";

export default function App() {
  const [evenNumbers, setEvenNumbers] = useState();

  return (
    <div>
      <Numbers evenNumbers={evenNumbers} setEvenNumbers={setEvenNumbers} />
    </div>
  );
}
