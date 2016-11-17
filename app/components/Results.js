var React = require('react')
var PropTypes = React.PropTypes

function Results (props) {
  return (
    <div> Results </div>
  )
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired
}

module.exports = Results
