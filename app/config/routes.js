var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require('../components/Home')
var PromptContainer = require('../containers/PromptContainer');
var ResultsContainer = require('../containers/ResultsContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='search' header='Player One' component={PromptContainer} />
      <Route path='results/:search' component={ResultsContainer} />
    </Route>
  </Router>
);

module.exports = routes;
