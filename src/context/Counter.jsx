import { createContext, useState } from "react";

export const CounterContext = createContext(null);

export const CounterProvider = (props) => {
    const [counter, setCounter] = useState(0)
    const name = "Shubhadip"
    return (
        <CounterContext.Provider value={{ counter, setCounter, name: "suman" }}>
            {props.children}
        </CounterContext.Provider>
    )
}
