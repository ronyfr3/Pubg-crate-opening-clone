import React from 'react'
import {IoManSharp} from 'react-icons/io5'
import {FiFlag} from 'react-icons/fi'
import {BiHappyHeartEyes} from 'react-icons/bi'
import './Logos.css'
const Logos = () => {
    return (
        <div className='logos'>
            <div>
                <span className='logos1'><IoManSharp/></span>
                <span className='logos2'><IoManSharp/></span>
            </div>
            <span className='logos3'><FiFlag/></span>
            <span className='logos4'><BiHappyHeartEyes/></span>
     </div>
    )
}

export default Logos
