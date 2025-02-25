"use client"
import { useState } from "react";
import { usePrev } from "../hooks/usePrev";

export default function Week11() {
    const [count, setCount] = useState(0)
    const previousCount = usePrev(count)

    return(
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(prev => prev+1)
            }>increase</button>
            <p>Previous Value is {previousCount}</p>
        </div>
    )
} 