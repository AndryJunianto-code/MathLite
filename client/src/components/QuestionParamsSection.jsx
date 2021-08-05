import {useState} from 'react'
import {Close} from '@material-ui/icons'
import HorizontalLine from '../utilities/HorizontalLine'
import generateExample from '../function/generateExample'
import DifficultyButtons from './DifficultyButtons'
export default function QuestionParamsSection({secondModalInfo,setOpenCombinedModal,setOpenFirstModal}) {
    const [example,setExample] = useState(generateExample(secondModalInfo,'SP',2))
    const closeModal = () => {
        setOpenCombinedModal(false)
        setOpenFirstModal(false)
    }
    const clickDone = () => {
        setOpenCombinedModal(false)
        setOpenFirstModal(false)
    }
    return (
        <div>
            <section className='flex items-center justify-between py-4 px-3'>
                <h1 className='text-3xl font-bold'>2. Modifikasi</h1>
                <span className='mr-2' onClick={closeModal}><Close/></span>
            </section>
            <HorizontalLine color='gray' height='1'/>
            <section className='px-3 py-2'>
                <h2 className='font-semibold text-2xl mb-2'>{secondModalInfo}</h2>
                <main className='text-lg'>
                    <h3 className='font-semibold'>Contoh Soal</h3>
                    <h3>{example.question}</h3>
                    <h3 className='font-semibold'>Jawaban</h3>
                    <h3>{example.answer}</h3>
                </main>
            </section>
            <HorizontalLine color='gray' height='1'/>
            <DifficultyButtons secondModalInfo={secondModalInfo} setExample={setExample}/>
            <HorizontalLine color='gray' height='1'/>
            <section className='px-3 py-2 flex mb-2 justify-center'>
                <div className='flex flex-col'>
                    <h2 className='text-lg font-semibold mb-1'>Frekuensi</h2>
                    <input type="text" className='miniInput'/>
                </div>
                <div className='flex flex-col'>
                    <h2 className='text-lg font-semibold mb-1'>Jumlah Soal</h2>
                    <input type="text" className='miniInput'/>
                </div>
            </section>
            <HorizontalLine color='gray' height='1'/>
            <section className='grid grid-cols-2 gap-x-3 px-3 py-2'>
                <button onClick={closeModal}
                className='bg-gray-300 hover:bg-opacity-30 hover:bg-gray-400 bg-opacity-60 text-gray-600 basicButton'>Cancel</button>
                <button onClick={clickDone}
                className='bg-blue-500 hover:bg-blue-600 hover:bg-opacity-30 bg-opacity-30 text-blue-700 basicButton'>Done</button>
            </section>
        </div>
    )
}
