import React from 'react'
import PropTypes from 'prop-types'
 
function Header({headerTitle,bgColor,textColor}) {
    const headerStyles= {
        backgroundColor:bgColor,
        color:textColor
    }
    return (
        <header style={headerStyles}>
            <div className='container'>
                <h2>{headerTitle}</h2>
            </div>
            
        </header>
    )
}

Header.defaultProps={
    headerTitle:'Feedback UI',
    bgColor:'rgba(0,0,0,0.4)',
    textColor:"#ff6a95"
}

Header.propTypes={
    headerTitle: PropTypes.string,
    bgColor:PropTypes.string,
    textColor:PropTypes.string
}

export default Header
