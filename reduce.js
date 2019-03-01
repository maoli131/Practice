// Initialize array [1,..,100]
const arr = [];
for (var i = 1; i < 101; i++) {
    arr.push(i);
}

// Find the sum of the array
var sum = arr.reduce(function(a,b){
    return a + b
  }, 0);

console.log(sum);