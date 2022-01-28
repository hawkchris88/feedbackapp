import React from 'react'
import { useState } from "react"
function FeedbackItem() {
    const [rating, setRating]=useState(7)
    const [text, setText]=useState('This is an example of a feedback Item')
    // const handleClick= ()=> setRating((prev)=> prev+1 )


    return (
        <div className='card'>
            
       
        <div className='num-display'>{rating}</div> 
        <div className="text-display">{text}</div>
        {/* <button onClick={handleClick}>Update</button> */}
        </div>
    )
}

export default FeedbackItem
