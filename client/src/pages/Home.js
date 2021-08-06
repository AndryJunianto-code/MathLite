import Navbar from "../components/Navbar"
import Content from "../components/Content"
import { useState} from "react"
export default function Home() {
    const [openFirstModal,setOpenFirstModal] = useState(false)
    return (
            <div className='lg:mt-20 bg-white lg:w-3/4 xl:w-8/12 2xl:w-1/2 lg:rounded-md'>
                <Navbar/>
                <Content setOpenFirstModal={setOpenFirstModal} openFirstModal={openFirstModal}/>
            </div>
    )
}
