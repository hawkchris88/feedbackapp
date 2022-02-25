import {FaTimes} from 'react-icons/fa'
import Card from './shared/Card'
import PropTypes from 'prop-types'
// import { useState } from "react"
function FeedbackItem({item,handleDelete}) {
    // const [rating, setRating]=useState(7)
    // const [text, setText]=useState('This is an example of a feedback Item')
    // const handleClick= ()=> setRating((prev)=> prev+1 )
   


    return (
        <Card >
            
        <div className='num-display'>{item.rating}</div> 
        <button onClick={()=>handleDelete(item.id)} className='close'>
            <FaTimes color='purple'/>
        </button>
        <div className="text-display">{item.text}</div>
        {/* <button onClick={handleClick}>Update</button> */}
        </Card>
    )

}


FeedbackItem.propTypes={
    item:PropTypes.object,
}
export default FeedbackItem
