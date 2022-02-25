import PropTypes from 'prop-types'

function Button({children, type, version, isDisabled}) {
    return (
        <div>
           <button disabled= {isDisabled} type={type} className={`btn btn-${version}`}> {children}</button> 
        </div>
    )
}
Button.defaultProps={
    version:'primary',
    type:'button',
    isDisabled:false
}
Button.propTypes = {
    children: PropTypes.node.isRequired,
    version:PropTypes.string,
    type:PropTypes.string,
    isDisabled:PropTypes.bool
}


export default Button

