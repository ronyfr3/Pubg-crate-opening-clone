import React from 'react'
import Start from './Start'
import Name from './Name'
import Firends from './Firends'
import Logos from './Logos'
import SelectMode from './SelectMode'
import Classic from './Classic'
import Footer from './Footer'
import './Loby.css'
import LuckyDraw from './LuckyDraw'
import WarningMessage from './WarningMessage'

const Loby = () => {
    return (
        <div className='loby'>
                <Name/>
                <LuckyDraw/>
                <Firends/>
                <Logos/>
                <SelectMode/>
                <Classic/>
                <Start/>
                <WarningMessage/>
                <Footer/>
        </div>
    )
}

export default Loby
