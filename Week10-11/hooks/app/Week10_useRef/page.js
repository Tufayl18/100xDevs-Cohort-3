"use client"
import { useState, useRef } from "react";
export default function Week10() {

  const [count, setCount] = useState(1)
  const timerValue = useRef()

  const startTimer = () => {
    let currentTimervalue = setInterval(() => {
      setCount(prevCount => prevCount + 1)
    }, 1000)
    timerValue.current = currentTimervalue
  }

  const stopTimer = () => {
    clearInterval(timerValue.current)

  }
  return (
   <>
   <div>
    <button onClick={startTimer}>start</button>
    <div>{count}</div>
    <button onClick={stopTimer}>stop</button>
   </div>
   

   </>
  );
}
