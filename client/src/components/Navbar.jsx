import {useState,useEffect} from 'react'
import {Menu} from '@material-ui/icons'
import HorizontalLine from '../utilities/HorizontalLine'

export default function Navbar({setOpenMenuModal}) {
    const [navScroll,setNavScroll] = useState(false)
    const displayMenu = () => {
        setOpenMenuModal((prev)=> !prev)
    }
    const changeNavbar = ()=>{
        if(window.scrollY > 130) {
            setNavScroll(true)
        } else {
            setNavScroll(false)
        }   
    }
    useEffect(()=> {
        window.addEventListener('scroll',changeNavbar)
        return ()=> {
            window.removeEventListener('scroll',changeNavbar)
        }
    },[])
    return (
        <nav className={`sticky top-0 z-20 ${navScroll ? 'bg-black bg-opacity-70 text-gray-100': ''}`}>
            <div className='flex justify-between py-2 px-4'>
                <h1 className='text-xl tracking-widest'>MathLite</h1>
                <span onClick={displayMenu}><Menu/></span>
            </div>
            <HorizontalLine color='black' height='1'/>
        </nav>
    )
}
