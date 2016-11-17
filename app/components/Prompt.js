var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;

function Prompt (props) {
  return (
    <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
      <div className="col-sm-12">
        <form onSubmit={props.onSubmitWord}>
          <div className="form-group">
            <input
              className='form-control'
              onChange={props.onUpdateWord}
              placeholder='Trump'
              type='text'
              value={props.word} />
          </div>
          <div className="form-group col-sm-4 col-sm-offset-4">
            <button
              className="btn btn-block btn-success"
              type="submit">
                Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

Prompt.propTypes = {
  onSubmitWord: PropTypes.func.isRequired,
  onUpdateWord: PropTypes.func.isRequired,
  word: PropTypes.string.isRequired
}

module.exports = Prompt;
