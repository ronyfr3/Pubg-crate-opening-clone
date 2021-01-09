import React from 'react'
import {VscBellDot} from 'react-icons/vsc'
import {BsFillPeopleFill} from 'react-icons/bs'
import './Friends.css'

const Firends = () => {
    return (
        <div className='friends'>
                   <div className='dateBell'>
                            <span className='people'><BsFillPeopleFill/></span>
                            <span className='date'> 11/200</span>
                            <span className='bell'><VscBellDot/></span>
                   </div>
                   
                   <div className='frameall'>
                     <span className='frameText1'>
                         <img src='https://th.bing.com/th/id/OIP.Eyi3AKWL0Nidvs2kou5vfQHaKu?w=182&h=264&c=7&o=5&pid=1.7' alt=''/>
                     </span>
                     <span className='frameText2'>
                         <img src='https://th.bing.com/th?q=Hand+Some+Clown+Boy&dc=3&w=100&h=100&c=1&rs=1&pid=InlineBlock&mkt=en-WW&adlt=moderate&t=1&mw=240&sr=3&shs=2' alt=''/>
                     </span>
                     <span className='frameText3'>
                         <img src='https://th.bing.com/th/id/OIP.h4eMUJ0L6vESxEh8z_5mJwHaKX?w=182&h=254&c=7&o=5&pid=1.7' alt=''/>
                     </span>
                     <span className='frameText4'>
                         <img src='https://th.bing.com/th/id/OIP.1z_Kg7jy0UyvyidORwzIpgHaHa?w=178&h=178&c=7&o=5&pid=1.7' alt=''/>
                     </span>
                   </div>
                </div>
    )
}

export default Firends
