const { useState, createContext } = require("react");

const CountContext = createContext()

const CountContextProvider = ({children}) => {
    const [count, setCount] = useState(0)

    return <CountContext.Provider value = {{count, setCount}}>
        {children}
    </CountContext.Provider>
}
export { CountContext ,CountContextProvider}