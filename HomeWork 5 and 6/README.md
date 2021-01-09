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
3) Tagging: https://kikill95.github.io/Tagging/ - vanilla js
4) Implement these functions: https://gist.githubusercontent.com/kikill95/89440b01a1680dfd969f3ba03c91b8f8/raw/9593f3d67be6f2e8891ecfdcbeab9b0e5b564f21/easy_coding.js --- ✔
