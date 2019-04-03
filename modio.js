const request = require("request");

const baseUri = "https://api.mod.io/v1";

class ModIO {
  constructor(apiKey) {
    this.apiKey = apiKey;

  }
  fetchGames(callback) {
    var URL = `${baseUri}/games?api_key=${this.apiKey}`
    request(URL, function (error, response, body) {
      if (!error & response.statusCode == 200) {
        callback(body)
      } else {
        console.error(`ERROR ${error}`)
        return `ERROR ${error}`
      }
    })
  }
}

module.exports = ModIO;