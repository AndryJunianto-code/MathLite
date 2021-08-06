import React from 'react'
import {Close} from '@material-ui/icons'
import HorizontalLine from '../utilities/HorizontalLine'
import { useExampleContext } from '../context/exampleContext'
export default function QuestionStyleModal({setOpenFirstModal,dispatch}) {
    const {exampleDispatch} = useExampleContext()
    const closeModal = () => {
        setOpenFirstModal(false)
    }
    const openSecondModal = (e) => {
        setOpenFirstModal(true)
        dispatch({type:e.target.id})
        exampleDispatch({type:'CHANGE_OPERATOR', payload:e.target.textContent})
    }
    return (
        <div className='absolute top-0 bottom-0 left-0 right-0 bg-white z-20'>
            <section className='flex items-center justify-between py-4 px-3'>
                <h1 className='text-3xl font-bold'>1. Tipe</h1>
                <span className='mr-2' onClick={closeModal}><Close/></span>
            </section>
            <HorizontalLine color='gray' height='1'/>
            <section>
                <h2 className='questionStyleOption' onClick={openSecondModal} id='ADDITION'>Pertambahan</h2>
                <h2 className='questionStyleOption' onClick={openSecondModal} id='SUBTRACTION'>Perkurangan</h2>
                <h2 className='questionStyleOption' onClick={openSecondModal} id='MULTIPLICATION'>Perkalian</h2>
                <h2 className='questionStyleOption' onClick={openSecondModal} id='DIVISION'>Pembagian</h2>
            </section>
        </div>
    )
}
