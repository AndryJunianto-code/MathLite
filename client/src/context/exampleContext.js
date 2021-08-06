import React,{ useContext,useState,useReducer,useEffect } from "react";
import generateExample from "../function/generateExample";
import exampleReducer from '../reducer/exampleReducer'
const EXAMPLE_INITIAL = {
    operator:"Pertambahan",/* Addition */
    type:'SP',
    frequency:2
}
const ExampleContext = React.createContext(EXAMPLE_INITIAL)

const ExampleProvider = ({children}) => {
    const [exampleState,exampleDispatch] = useReducer(exampleReducer,EXAMPLE_INITIAL)
    const {operator,type,frequency} = exampleState
    const [example,setExample] = useState(generateExample(operator,type,frequency))
    useEffect(()=> {
        setExample(generateExample(operator,type,frequency))
    },[exampleState])
    return <ExampleContext.Provider value={{
        example,setExample,exampleDispatch,exampleState
    }}>
        {children}
    </ExampleContext.Provider>
}

export const useExampleContext = () => {
    return useContext(ExampleContext)
}
export {ExampleProvider}