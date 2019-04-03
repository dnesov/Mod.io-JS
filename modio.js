const request = require("request");

const baseUri = "https://api.mod.io/v1";

class ModIO {
  constructor(apiKey) {
    this.apiKey = apiKey;

  }
  fetchGames(options, callback) {
    var apiOptions = "";

    var URL = `${baseUri}/games?${apiOptions}api_key=${this.apiKey}`

    var apiKey2 = this.apiKey //Please don't ask me why

    Object.keys(options).forEach(function (key) {
      switch (key) {
        case "name":
          apiOptions += `_q=${options[key]}&`
          break;

        default:
        console.error("Can't sort by that!")
        break;
      }

      URL = `${baseUri}/games?${apiOptions}api_key=${apiKey2}`
    });

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