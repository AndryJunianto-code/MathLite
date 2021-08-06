import { useExampleContext } from "../context/exampleContext"
import QuestionSection from "./QuestionSection"
export default function Content({setOpenFirstModal,setOpenCombinedModal}) {
    const {questionAndAnswer} = useExampleContext()
    const displayModal = () => {
        setOpenFirstModal(true)
        setOpenCombinedModal(true)
    }
    return (
        <section>
            <QuestionSection/>
            <div className='w-full flex flex-col items-center text-xl h-screen'>
                {questionAndAnswer.length === 0 && <h1 className='text-gray-600 mb-2 capitalize tracking-wide mt-28'>Tidak ada pertanyaan</h1>}
                <button onClick={displayModal}
                className='w-56 rounded-sm tracking-wider bg-blue-500 hover:bg-blue-600 text-center py-1 text-gray-100 shadow-md'>Tambah pertanyaan</button>
            </div>
        </section>
    )
}
