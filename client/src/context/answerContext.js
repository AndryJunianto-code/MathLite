import React,{ useContext,useState} from "react";

const AnswerContext = React.createContext()

const AnswerProvider = ({children}) => {
    const [showAnswer,setShowAnswer] = useState(false)

    return <AnswerContext.Provider value={{
        showAnswer,setShowAnswer
    }}>
        {children}
    </AnswerContext.Provider>
}

export const useAnswerContext = () => {
    return useContext(AnswerContext)
}
export {AnswerProvider}