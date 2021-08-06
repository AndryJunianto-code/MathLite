import { useState } from 'react'
import {Close} from '@material-ui/icons'
import HorizontalLine from '../utilities/HorizontalLine'
import DifficultyButtons from './DifficultyButtons'
import { useExampleContext } from '../context/exampleContext'
import FrequencyInput from './FrequencyInput'
import generateQuestion from '../function/generateQuestion'
export default function QuestionParamsModal({state,dispatch,setOpenFirstModal}) {
    const {example,setQuestionAndAnswer,exampleState} = useExampleContext()
    const [totalQuestion,setTotalQuestion] = useState(10)
    const questionLimit = 2000
    const closeModal = () => {
        dispatch({type:'CLOSEMODAL'})
        setOpenFirstModal(false)
    }
    const clickBack = () => {
        dispatch({type:'CLOSEMODAL'})
    }
    const clickDone = () => {
        let allQuestionAndAnswer = generateQuestion(totalQuestion>questionLimit?questionLimit:totalQuestion,exampleState)
        setQuestionAndAnswer((prev)=>[...prev,allQuestionAndAnswer])
        dispatch({type:'CLOSEMODAL'})
        setOpenFirstModal(false)
        window.scrollTo(0,window.pageYOffset-600)
    }
    return (
        <div className='absolute top-0 bottom-0 left-0 right-0 bg-white z-20'>
            <section className='flex items-center justify-between py-4 px-3'>
                <h1 className='text-3xl font-bold'>2. Modifikasi</h1>
                <span className='mr-2' onClick={closeModal}><Close/></span>
            </section>
            <HorizontalLine color='gray' height='1'/>
            <section className='px-3 py-2'>
                <h2 className='font-semibold text-2xl mb-2'>{state.type}</h2>
                <main className='text-lg'>
                    <h3 className='font-semibold'>Contoh Soal</h3>
                    <h3>{example.question}</h3>
                    <h3 className='font-semibold'>Jawaban</h3>
                    <h3>{example.answer}</h3>
                </main>
            </section>
            <HorizontalLine color='gray' height='1'/>
            <DifficultyButtons secondModalInfo={state.type}/>
            <HorizontalLine color='gray' height='1'/>
            <section className='px-3 py-2 flex mb-2 justify-center'>
                <FrequencyInput/>
                <div className='flex flex-col'>
                    <h2 className='text-lg font-semibold mb-1'>Jumlah Soal</h2>
                    <input type="text" className='miniInput'
                    onChange={(e)=>setTotalQuestion(e.target.value)} value={totalQuestion}
                    />
                </div>
            </section>
            <HorizontalLine color='gray' height='1'/>
            <section className='grid grid-cols-2 gap-x-3 px-3 py-2'>
                <button onClick={clickBack}
                className='bg-gray-300 hover:bg-opacity-30 hover:bg-gray-400 bg-opacity-60 text-gray-600 basicButton'>Back</button>
                <button onClick={clickDone}
                className='bg-blue-500 hover:bg-blue-600 hover:bg-opacity-30 bg-opacity-30 text-blue-700 basicButton'>Done</button>
            </section>
        </div>
    )
}
