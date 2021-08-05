import {useState} from 'react'
import QuestionStyleSection from './QuestionStyleSection'
import QuestionParamsSection from './QuestionParamsSection'
export default function CombinedModal({openCombinedModal,setOpenCombinedModal,setOpenFirstModal}) {
    const [secondModalInfo,setSecondModalInfo] = useState('')
    const closeCombinedModal = () => {
        setOpenCombinedModal(false)
        setOpenFirstModal(false)
    }
    return (
        <>
        {openCombinedModal && 
        <div onClick={closeCombinedModal} className='absolute top-0 left-0 bottom-0 right-0 bg-black bg-opacity-50 p-10 gap-x-1'>
            <div onClick={e=>e.stopPropagation()} className='bg-white z-20 w-full xl:w-11/12 2xl:w-10/12 mx-auto h-full grid grid-cols-2'>
                <QuestionStyleSection setSecondModalInfo={setSecondModalInfo}/>
                <QuestionParamsSection secondModalInfo={secondModalInfo} setOpenCombinedModal={setOpenCombinedModal} setOpenFirstModal={setOpenCombinedModal}/>
            </div>
        </div>}
        </>
    )
}
