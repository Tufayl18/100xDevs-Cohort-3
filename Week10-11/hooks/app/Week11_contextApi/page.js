"use client"
import  {Count}  from "../components/count"
import Decrease from "../components/decreaseCounter"
import Increase from "../components/increaseCounter"
import {CountContextProvider} from "../components/contextProvider"

function Counter() {
    return (
        <>
        <CountContextProvider>
        <Count/>
        <Increase/>
        <Decrease/>
        </CountContextProvider>
        
        </>
    )
}

export default Counter