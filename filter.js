// Load the json data
const json = require("./toFind.json")
const arr = json['data']

function callback (fiveX) {
    return function (value, index, array) {
        return value["FiveX"].includes(fiveX);
    }
}

// How to loop to create this object ?
var object = {
    "data": {
        "fire": arr.filter(callback("fire")),
        "water": arr.filter(callback("water")),
        "gold": arr.filter(callback("gold")),
        "wood": arr.filter(callback("wood")),
        "dirt": arr.filter(callback("dirt"))
    }
}

var fs = require('fs')
var to_write = JSON.stringify(object)
fs.writeFile('my_filter_ans.json', to_write, 'utf8', function(err) {
    if (err) throw err;
    console.log('complete');
    });


