var words = ["ground", "control", "to", "major", "tom"];

var wordNum = map(words, function(word) {
  return word.length;
});

var upper = map(words, function(word) {
  return word.toUpperCase();
});

var reverse = map(words, function(word) {
  return word.split('').reverse().join('');
});

function map(arr, callback) {
  var newArr = [];
  for (i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i], i, arr));
  }
  return newArr;
}

console.log(wordNum);
console.log(upper);
console.log(reverse);