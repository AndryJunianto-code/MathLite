import Navbar from "../components/Navbar"
import Content from "../components/Content"
import { useState} from "react"
import MenuModal from '../components/MenuModal'
export default function Home() {
    const [openFirstModal,setOpenFirstModal] = useState(false)
    const [openMenuModal,setOpenMenuModal] = useState(false)

    return (
        <>
            <div className='lg:mt-20 bg-white lg:w-3/4 xl:w-8/12 2xl:w-1/2 lg:rounded-md'>
                <Navbar setOpenMenuModal={setOpenMenuModal}/>
                <Content setOpenFirstModal={setOpenFirstModal} openFirstModal={openFirstModal}/>
            {openMenuModal && <MenuModal setOpenMenuModal={setOpenMenuModal}/>}

            </div>
        </>
    )
}
