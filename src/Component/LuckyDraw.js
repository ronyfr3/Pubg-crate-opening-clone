import React,{ useState } from 'react'
import data from './data'
import './LuckeyDraw.css'

const LuckyDraw = () => {
    const [images,setImages]= useState(data)
    const [value,setValue]= useState([])
    const [click,setClick]= useState(false)

    console.log(setImages)

    const generaterandomimages=(min,max)=>{
       let step1 = max-min+1;
       let step2 = Math.random()*step1
       let result = Math.floor(step2) +min
       return result
    }
    const duocallfunction=()=>{
        setClick(!click)
        setValue(images[generaterandomimages(0,images.length-1)])
    }
    console.log(value)
    console.log(click)

    return (
        <div className='draw'>
            <h4>Try Your Luck !</h4>
            {
                !click ? (
                    <div className='drawflex'>
              {
                  images.map((item)=>{
                      const {img,id} = item
                      return(
                          <div key={id} className='imgsec'>
                           <img src={img} alt=''/>
                          </div>
                      )
                  })
              }
              </div>
                ) : (
                  <div className='draw1'>
                      <h4>You have got {value.name}</h4>
                      <div className='drawflex'>
                        <div className='imgsec1'>
                            <img src={value.img} alt=''/>
                        </div>
                      </div>
                  </div>
                )
            }
            <button onClick={duocallfunction}>Open Once</button>
        </div>
    )
}

export default LuckyDraw
