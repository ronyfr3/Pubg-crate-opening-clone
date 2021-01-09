import React from 'react'
import {HiOutlineUserGroup} from 'react-icons/hi'
import {RiRoadMapLine} from 'react-icons/ri'
import './Classic.css'

const Classic = () => {
    return (
        <div className='classbtn'>
            <div>
                <span className='map'><RiRoadMapLine/></span>
            </div>
            <div className='classwell'>
            <div className='classicdiv'>
                <p className='classic'>CLassic</p>
                <p className='erangle'>Selected:Erangle</p>
            </div>
            <div className='peonewtpp'>
                <span className='grouppeo'><HiOutlineUserGroup/></span>
                <span className='new'>NEW</span>
                <p className='tpp'>TPP</p>
            </div>
        </div>
     </div>
    )
}

export default Classic
