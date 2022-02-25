import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"
import { useState } from "react"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"

function App(){
    const [FeedbackItems, setFeedbackItem]=useState(FeedbackData)
    const deleteFeedBack= (id)=>{
        if(window.confirm('Are you sure you want to delete?')){
            setFeedbackItem(FeedbackItems.filter((item)=>item.id !== id))
    }
        }
        
    return (
    <div className="container">
        <Header></Header>
        <FeedbackForm/>
        <FeedbackStats data={FeedbackItems}/>
        <FeedbackList data={FeedbackItems} handleDelete={deleteFeedBack}/>    
    </div>
    
    
    )
    
}

export default App