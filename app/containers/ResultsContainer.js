var React = require('react');
var Results = require('../components/Results')
var twitterHelpers = require('../utils/twitterHelpers')
console.log("twitterHelpers");

var ResultsContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      isLoading: true,
      twitterInfo: []
    }
  },
  componentDidMount: function () {
    var query = this.props.location.query;
    console.log(this.location);
    twitterHelpers.getTweetInfo(query.searchterm)
    .then(function (tweets){
      this.setState({
        isLoading: false
      })
    }.bind(this))
  },
  render: function() {
    return (
      <Results
        isLoading={this.state.isLoading} />
    )
  }
})

module.exports = ResultsContainer;
