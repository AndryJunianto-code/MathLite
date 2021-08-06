import { useExampleContext } from "../context/exampleContext"
import IndividualQuestion from "./IndividualQuestion"
import {v4} from 'uuid'

export default function QuestionSection() {
    const {questionAndAnswer} = useExampleContext()
    return (
        <div className='mt-4 px-2 xl:px-7 2xl:px-9 h-auto'>
             {questionAndAnswer.map(s=> (
                <div key={v4()} className='grid grid-cols-2 mb-3 gap-x-1 border-b border-black border-opacity-10'>
                    {s.map((data,index)=> (
                    <IndividualQuestion data={data} index={index} key={v4()}/>
                    ))}
                </div>
            ))}   
        </div>
    )
}
