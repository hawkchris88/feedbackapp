import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'
function FeedbackList({data, handleDelete}) {
    if(data.length === 0){
        return <p>No Feedbacks Yet</p>
    }
    
    return (
        
        <div className='feedback-list'>
            {
                data.map((item)=>(
                        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
                ))
            }
            
        </div>
    )
}
FeedbackList.propTypes={
    data:PropTypes.array,
}

export default FeedbackList
