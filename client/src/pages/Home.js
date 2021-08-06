import Navbar from "../components/Navbar"
import Content from "../components/Content"
import { useState,useReducer,useEffect } from "react"
import secondReducer from '../reducer/secondReducer'
import QuestionStyleModal from "../components/QuestionStyleModal"
import QuestionParamsModal from "../components/QuestionParamsModal"
import CombinedModal from "../components/CombinedModal"
const INITIAL_STATE_SECOND = {
    open:false,
    type:""
}
export default function Home() {
    const [bigScreen,setBigScreen] = useState(false)
    const [openFirstModal,setOpenFirstModal] = useState(false)
    const [openCombinedModal,setOpenCombinedModal] = useState(openFirstModal)
    const [secondState,secondDispatch] = useReducer(secondReducer,INITIAL_STATE_SECOND)
    useEffect(()=> {
        setBigScreen(window.innerWidth >= 768 ? true : false)
    },[])
    return (
        <>
            <div className='lg:mt-20 bg-white lg:w-3/4 xl:w-8/12 2xl:w-1/2 lg:rounded-md'>
                <Navbar/>
                <Content setOpenFirstModal={setOpenFirstModal} setOpenCombinedModal={setOpenCombinedModal} bigScreen={bigScreen}/>
            </div>
            <div className='md:hidden'>{/* SMALL SCREEN */}
            {openFirstModal && <QuestionStyleModal setOpenFirstModal={setOpenFirstModal} dispatch={secondDispatch}/>}
            {secondState.open && <QuestionParamsModal state={secondState} dispatch={secondDispatch} setOpenFirstModal={setOpenFirstModal}/>}
            </div>
            {bigScreen && openFirstModal && <div className='hidden md:block'>{/* BIG SCREEN */}
                <CombinedModal openCombinedModal={openCombinedModal} setOpenCombinedModal={setOpenCombinedModal} setOpenFirstModal={setOpenFirstModal}/>
            </div>}
        </>
    )
}
