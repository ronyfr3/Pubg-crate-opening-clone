import React from 'react'
import {FaBatteryFull} from 'react-icons/fa'
import {GiNetworkBars} from 'react-icons/gi'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
             <div className='footerflex'> 
                 <span className='battery'><FaBatteryFull/></span>
                 <span className='net'><GiNetworkBars/></span>
                 <span className='asia'>Asia</span>
                 <span className='hd'>Non-HD</span>
             </div>
        </div>
    )
}

export default Footer
