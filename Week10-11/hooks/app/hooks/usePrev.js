import { useEffect, useRef } from "react"

export const usePrev = (value) => {
    const ref = useRef()

    useEffect(() => {
        ref.current = value
    }, [value])
    return ref.current
} 

// React first renders the component, then runs useEffect.
// This means usePrev returns the previous value on the next render.
// It will first return ref.current and then run useEffect.