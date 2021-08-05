import React from 'react'
import {Menu} from '@material-ui/icons'
import HorizontalLine from '../utilities/HorizontalLine'
export default function Navbar() {
    return (
        <nav>
            <div className='flex justify-between py-2 px-4'>
                <h1 className='text-xl tracking-widest'>MathLite</h1>
                <Menu/>
            </div>
            <HorizontalLine color='black' height='1'/>
        </nav>
    )
}
