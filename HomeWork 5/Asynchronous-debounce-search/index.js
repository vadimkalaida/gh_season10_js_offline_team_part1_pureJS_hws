const input = document.querySelector('#input');

input.addEventListener('change', () => {
  let timeout = setTimeout(() => {
    console.log(input.value);
  }, 300);
  clearTimeout();
});