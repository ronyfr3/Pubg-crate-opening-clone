import React from 'react'
import {GiChessQueen} from 'react-icons/gi'
import './Name.css'

const Name = () => {
    return ( 
        <div className='backImage'>
            <div className='frameText'>
                <img src='https://scontent.fcla1-1.fna.fbcdn.net/v/t1.0-9/60344001_1078699868999525_5024715907839033344_o.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=xcY9iasjpi0AX8W11bK&_nc_ht=scontent.fcla1-1.fna&oh=514d898409fdd3c4485a5eb24e0aadbc&oe=601BC465' alt=''/>
            </div>
                <p className='mridul'>MMridul</p>
            <div className='cheesking'><GiChessQueen/></div>
       </div>
    )
}

export default Name
