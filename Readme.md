![mod.io](https://camo.githubusercontent.com/f66236072c6723d59617f821e9ec200e94696989/68747470733a2f2f7374617469632e6d6f642e696f2f76312f696d616765732f6272616e64696e672f6d6f64696f2d636f6c6f722d6461726b2e737667)
# Mod.io JavaScript Wrapper
![license](https://img.shields.io/badge/License-MIT-green.svg) ![state](https://img.shields.io/badge/State-WIP-red.svg)

A JavaScript wrapper of the Mod.io's API. 

## What is Mod.io?
mod.io is a cross-platform, lightweight & customizable modding solution that works behind the scenes to power your modding community.

I recommend to check it out!

## Getting started
Download the script from the [Release](https://www.google.com) tab and require it.

run "npm i --save request"

#### Example
```js
var ModIO = require("./modio.js");

const modio = new ModIO("164b63fbc8937875968618f70ff34660");

modio.fetchGames(function (data) {
  console.log(data);
});
```
This will display the list of all games.

## Contributors
[@Daniel Nesov](https://github.com/dnesov)
