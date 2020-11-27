const sliderItems = document.querySelectorAll('.slider-item');
let currentSliderItemIndex = 0;
let leftPosNumber = 0;

let sliderFunction = (items, index) => {
  for(let i = 0; i < items.length; i++) {
    if(i === index) {
      items[i].classList.add('active');
    } else {
      if(items[i].classList.contains('active') ) {
        items[i].classList.remove('active')
      }

    }
  }
};
document.querySelector('#leftBtn').addEventListener('click', () => {
  currentSliderItemIndex--;
  if(currentSliderItemIndex < 0) {
    leftPosNumber = -(sliderItems[0].clientWidth * sliderItems.length);
    currentSliderItemIndex = sliderItems.length - 1;
  }
  leftPosNumber += 600;
  sliderFunction(sliderItems, currentSliderItemIndex);
});

document.querySelector('#rightBtn').addEventListener('click', () => {
  currentSliderItemIndex++;
  if(currentSliderItemIndex > sliderItems.length - 1) {
    leftPosNumber = 600;
    currentSliderItemIndex = 0;
  }
  leftPosNumber -= 600;
  sliderFunction(sliderItems, currentSliderItemIndex);
});