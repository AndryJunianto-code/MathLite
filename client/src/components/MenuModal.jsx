import React from 'react'
import {useAnswerContext} from '../context/answerContext'
import {useExampleContext} from '../context/exampleContext'
export default function MenuModal({setOpenMenuModal}) {
    const {setShowAnswer} = useAnswerContext()
    const {setQuestionAndAnswer} = useExampleContext()
    const closeModal = () => {
        setOpenMenuModal(false)
    }
    const deleteAll = () => {
        setQuestionAndAnswer([])
    }
    return (
        <div onClick={closeModal} className='fixed top-0 left-0 bottom-0 right-0 bg-transparent'>
            <div onClick={e=>e.stopPropagation()} 
            className='bg-gray-300 shadow-md w-40 h-32 text-gray-700 fixed top-10 right-4 lg:top-28 lg:right-40 xl:right-64 2xl:right-96  rounded-sm'>
                <p onClick={()=>setShowAnswer((prev)=>!prev)} className='menuOption'>Buka jawaban</p>
                <p onClick={deleteAll} className='menuOption'>Hapus semua</p>
            </div>
        </div>
    )
}
