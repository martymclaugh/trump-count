var axios = require('axios');

function performSearch (searchterm) {
  return axios.get('https://api.twitter.com/1.1/search/tweets.json?q=trump')
}

var helpers = {
  getTweetInfo: function (searchterm) {
    // fetch data from twitter
    return axios.all(performSearch(searchterm)).then(function (info) {
      console.log(info);
    })
  }
};

module.exports = helpers;
