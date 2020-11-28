1) function perform() { --- <br>
  //TODO implement <br>
} <br>
perform(20, function(value) { <br>
  console.log(value) // 20 <br>
  var param = 1; <br>
  console.log(param); // 1 <br>
  return param; <br>
}) <br>
.then('a', 'b', function(a, b, param) { <br>
  console.log(++param); // 2 <br>
  return param; <br>
}) <br>
.then(function(param) { // param === 2 <br>
  console.log(++param); // 3 <br>
  return param; <br>
}); <br>
2) Asynchronous-debounce-search --- ✔<br>