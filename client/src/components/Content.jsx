import { useEffect,useState,useReducer} from "react"
import { useExampleContext } from "../context/exampleContext"
import QuestionSection from "./QuestionSection"
import CombinedModal from "./CombinedModal"
import QuestionStyleModal from './QuestionStyleModal'
import QuestionParamsModal from './QuestionParamsModal'
import secondReducer from '../reducer/secondReducer'
const INITIAL_STATE_SECOND = {
    open:false,
    type:""
}
export default function Content({setOpenFirstModal,openFirstModal}) {
    const [bigScreen,setBigScreen] = useState(false)
    const [openCombinedModal,setOpenCombinedModal] = useState(false)
    const {questionAndAnswer} = useExampleContext()
    const [secondState,secondDispatch] = useReducer(secondReducer,INITIAL_STATE_SECOND)

    const displayModal = () => {
        setOpenFirstModal(true)
        setOpenCombinedModal(true)
        window.scrollTo(0,window.pageYOffset+2000)
    }
    useEffect(()=> {
        setBigScreen(window.innerWidth >= 768 ? true : false)
    },[])
    return (
        <section>
            <QuestionSection/>
            <div className='w-full flex flex-col items-center text-xl h-screen relative'>
                {questionAndAnswer.length === 0 && <h1 className='text-gray-600 mb-2 capitalize tracking-wide mt-28'>Tidak ada pertanyaan</h1>}
                <button onClick={displayModal}
                className='w-56 rounded-sm tracking-wider bg-blue-500 hover:bg-blue-600 text-center py-1 text-gray-100 shadow-md'>
                    Tambah pertanyaan
                </button>
                {bigScreen && openFirstModal && 
                    <div className='hidden md:block'>{/* BIG SCREEN */}
                        <CombinedModal openCombinedModal={openCombinedModal} setOpenCombinedModal={setOpenCombinedModal} setOpenFirstModal={setOpenFirstModal}/>
                    </div>
                }
                 <div className='md:hidden'>{/* SMALL SCREEN */}
                    {openFirstModal && <QuestionStyleModal setOpenFirstModal={setOpenFirstModal} dispatch={secondDispatch}/>}
                    {secondState.open && <QuestionParamsModal state={secondState} dispatch={secondDispatch} setOpenFirstModal={setOpenFirstModal}/>}
                </div>
            </div>
        </section>
    )
}
