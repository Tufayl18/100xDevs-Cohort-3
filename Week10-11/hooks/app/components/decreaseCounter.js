import { useContext } from "react";
import { CountContext } from "./contextProvider";

export default function Decrease() {
  const { setCount } = useContext(CountContext);
  const decreaseCount = () => {
    setCount((c) => c - 1);
  };
  return (
    <div>
      <button onClick={decreaseCount}>Decrease Count</button>
    </div>
  );
}
