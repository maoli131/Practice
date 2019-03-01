// Load the json data
const json = require("./toFind.json")
const arr = json['data']

// Find the John whose favorite is fire
var find_ans = arr.find(function(element) {
    return element["first name"] === "John" && element["FiveX"] === "fire"
});

// Write the resulting array to a json file
var object = {
    "data": find_ans
};

var fs = require('fs')
var to_write = JSON.stringify(object)
fs.writeFile('my_find_ans.json', to_write, 'utf8', function(err) {
    if (err) throw err;
    console.log('complete');
    });