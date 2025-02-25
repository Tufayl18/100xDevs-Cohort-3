import { useContext } from "react"
import { CountContext } from "./contextProvider"

export const Count = () => {
    const {count} = useContext(CountContext)
    return (
        <div>
            Count : {count}
        </div>
    )
}
