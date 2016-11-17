var React = require('react');
var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      word: ''
    }
  },
  handleSubmitWord: function (e) {
    e.preventDefault();
    var word = this.state.word;
    this.context.router.push('/results/' + this.state.word)
  },
  handleUpdateWord: function (event) {
    this.setState({
      word: event.target.value
    });
  },
  render: function () {
    return (
      <Prompt
        onSubmitWord={this.handleSubmitWord}
        onUpdateWord={this.handleUpdateWord}
        word={this.state.word} />
    )
  }
});

module.exports = PromptContainer;
