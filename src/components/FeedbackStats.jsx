import PropTypes from 'prop-types'

function FeedbackStats({data}) {
    let average= data.reduce((acc,cur)=>{
return acc + cur.rating
    },0)/data.length
    average =average.toFixed(1).replace(/[.,]0$/,'')
    return (
        <div className="feedback-stats">
           <h4>{data.length} Reviews</h4>
           <h4>Average Rating: {isNaN(average)?0:average} </h4>
        </div>
    )
}

FeedbackStats.propTypes ={
    data: PropTypes.array.isRequired
}

export default FeedbackStats
