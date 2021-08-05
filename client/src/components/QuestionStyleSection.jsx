import React from 'react'
import HorizontalLine from '../utilities/HorizontalLine'
export default function QuestionStyleSection({setSecondModalInfo}) {
    const goSecondModal = (e) => {
        setSecondModalInfo(e.target.textContent)
    }
    return (
        <div className='border-r-2 border-gray-200'>
            <section className='flex items-center justify-between py-4 px-3'>
                <h1 className='text-3xl font-bold'>1. Tipe</h1>
            </section>
            <HorizontalLine color='gray' height='1'/>
            <section>
                <h2 className='questionStyleOption' onClick={goSecondModal}>Pertambahan</h2>
                <h2 className='questionStyleOption' onClick={goSecondModal} >Perkurangan</h2>
                <h2 className='questionStyleOption' onClick={goSecondModal}>Perkalian</h2>
                <h2 className='questionStyleOption' onClick={goSecondModal}>Pembagian</h2>
            </section>
        </div>
    )
}
