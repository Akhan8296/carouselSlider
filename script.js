const slides = document.querySelectorAll('.slide');
var counter = 0;
const maxCounter = 3;//total slidesImages - 1 
slides.forEach((slide,idx) => {
  slide.style.left = `${idx * 100}%`;
});
const goPrev = () => {
  counter = Math.max(0, counter - 1);
  slideImage();
}
const goNext = () => {
  counter = Math.min(maxCounter, counter + 1);
  slideImage();
}
const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`
  });
}