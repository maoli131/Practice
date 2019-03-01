// Load the json data
const json = require("./toFind.json")
const arr = json['data']

// Map to the code representaion 
const map_ans = arr.map(arr_item => {
    return arr_item['id'] +arr_item["FiveX"] + ASCII(arr_item["first name"]);
})


// Write the resulting array to a json file
var object = {
    "data": map_ans
};

var fs = require('fs')
var to_write = JSON.stringify(object)
fs.writeFile('my_map_ans.json', to_write, 'utf8', function(err) {
    if (err) throw err;
    console.log('complete');
    });

// Helper function for ASCII
function ASCII (name) {
    var sum = 0
    for (var i = 0; i < name.length; i++) {
        sum += name.charCodeAt(i);
    }
    return sum
}
