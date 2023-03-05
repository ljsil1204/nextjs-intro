import Seo from "@/components/Seo";
import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <Seo title="Home" />
      <h1 className="active">Home {counter}</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
    </div>
  );
}
