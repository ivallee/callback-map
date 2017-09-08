function map(arr, cb) {
  var newArray = [];
  for (var i = 0; i < arr.length; i++) {
    newArray.push(cb(arr[i]));
  }
  return newArray;
}

var words = ["ground", "control", "to", "major", "tom"];

var length = map(words, function(word) {
  return word.length;
});

var upper = map(words, function(word) {
  return word.toUpperCase();
});

var reverse = map(words, function(word) {
  return word.split('').reverse().join('');
});


console.log(length);
console.log(upper);
console.log(reverse);