import { useContext } from "react";
import { CountContext } from "./contextProvider";

export default function Increase() {
  const { setCount } = useContext(CountContext);

  const increaseCount = () => {
    setCount((c) => c + 1);
  };
  return (
    <div>
      <button onClick={increaseCount}>Increase Count</button>
    </div>
    
  );
}
