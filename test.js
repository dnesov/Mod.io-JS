var ModIO = require("./modio.js");

const mod = new ModIO("164b63fbc8937875968618f70ff34660");

mod.fetchGames(function (data) {
  console.log(data);
});