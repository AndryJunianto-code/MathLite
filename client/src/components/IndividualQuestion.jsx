import { useAnswerContext } from "../context/answerContext"

export default function IndividualQuestion({data,index}) {
    const {showAnswer} = useAnswerContext()
    return (
        <div className='grid grid-cols-5 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-9'>
            <span className='font-light col-span-1'>{index+1}.</span>
            <p className='col-span-4 sm:col-span-5 md:col-span-6 lg:col-span-8 break-words text-gray-600 mb-2 text-xl font-semibold'>
                {data.question}
                <span className={`${showAnswer?'visible':'invisible'}`}> {data.answer}</span>
            </p>
        </div>
    )
}
