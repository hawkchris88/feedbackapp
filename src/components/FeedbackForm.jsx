import Card from "./shared/Card"
import Button from "./shared/Button"
import { useState } from "react"
import RatingSelect from "./RatingSelect"

function FeedbackForm() {
    const [text,setText]= useState('')
    const [rating,setRating] =useState(10)
    const [warningMessage,setWarningMessage]= useState('')
    const [btnDisabled,setBtnDisabled]= useState(true)
    const handleTextChange= (t)=>{
        setText(t.target.value)
        if(text===''){
            console.log('empty text')
            setWarningMessage(null)
            setBtnDisabled(true)
        }
        else if (text !=='' && text.trim().length <=10){
            console.log('text not up to',text)
            setBtnDisabled(true)
            setWarningMessage('Text must be at least 10 Characters')
        }
        else{
            console.log('text more than or up to 10')
            setWarningMessage(null)
            setBtnDisabled(false)
        }
    
    }
    
    return (
        <div>
         <Card>
        
             <form>
                 <h2>How would you rate your service with us?</h2>
               <RatingSelect select={(rating)=>{setRating(rating)}}/>
                 <p>{text}</p>
                 <div className="input-group">
                     <input onChange={handleTextChange} type='text' placeholder="Write a review" value={text}/>
                     <Button type="submit" isDisabled={btnDisabled}>Send</Button>
                 </div>
                 {warningMessage&&<div className="message">{warningMessage}</div>}
             </form>
         </Card>
        </div>
    )
}

export default FeedbackForm
