const FIRST_SLIDE = 0;
const SECOND_SLIDE = 1;
const THIRD_SLIDE = 2;

const section = document.querySelector('.novelty');
const slider = document.querySelector('.novelty__wrapper');
const sliderList = slider.querySelector('.novelty__sliders');

const sliderCount = slider.querySelectorAll('.novelty__type').length;
const sliderWidth = slider.clientWidth;

const buttonLeft = slider.querySelector('.slider-button--left');
const buttonRight = slider.querySelector('.slider-button--right');

const paginationFirst = slider.querySelector('.novelty__button--first');
const paginationSecond = slider.querySelector('.novelty__button--second');
const paginationThird = slider.querySelector('.novelty__button--third');

let sliderNum = 0;

const setSlide = () => {
  sliderList.style.transform = `translateX(${-sliderNum * sliderWidth}px)`;
  switch (sliderNum) {
    case 0:
      paginationFirst.classList.add('novelty__button--active');
      paginationSecond.classList.remove('novelty__button--active');
      paginationThird.classList.remove('novelty__button--active');

      section.classList.add('novelty--flat-open');
      section.classList.remove('novelty--es-open');
      section.classList.remove('novelty--latte-open');
      break;
    case 1:
      paginationFirst.classList.remove('novelty__button--active');
      paginationSecond.classList.add('novelty__button--active');
      paginationThird.classList.remove('novelty__button--active');

      section.classList.remove('novelty--flat-open');
      section.classList.remove('novelty--es-open');
      section.classList.add('novelty--latte-open');
      break;
    case 2:
      paginationFirst.classList.remove('novelty__button--active');
      paginationSecond.classList.remove('novelty__button--active');
      paginationThird.classList.add('novelty__button--active');

      section.classList.remove('novelty--flat-open');
      section.classList.add('novelty--es-open');
      section.classList.remove('novelty--latte-open');
      break;
  }
};

const leftSLide = (evt) => {
  evt.preventDefault();
  buttonRight.disabled = false;
  sliderNum--;
  if (sliderNum <= 0) {
    buttonLeft.disabled = true;
  }
  setSlide();
};

const rightSLide = (evt) => {
  evt.preventDefault();
  buttonLeft.disabled = false;
  sliderNum++;
  if (sliderNum >= sliderCount - 1) {
    buttonRight.disabled = true;
  }
  setSlide();
};

buttonLeft.addEventListener('click', leftSLide);
buttonRight.addEventListener('click', rightSLide);

paginationFirst.addEventListener('click', () => {
  sliderNum = 0;

  paginationFirst.classList.add('novelty__button--active');
  paginationSecond.classList.remove('novelty__button--active');
  paginationThird.classList.remove('novelty__button--active');

  section.classList.add('novelty--flat-open');
  section.classList.remove('novelty--es-open');
  section.classList.remove('novelty--latte-open');

  sliderList.style.transform = `translateX(${-FIRST_SLIDE * sliderWidth}px)`;

  buttonLeft.disabled = true;
  buttonRight.disabled = false;
});
paginationSecond.addEventListener('click', () => {
  sliderNum = 1;

  paginationFirst.classList.remove('novelty__button--active');
  paginationSecond.classList.add('novelty__button--active');
  paginationThird.classList.remove('novelty__button--active');

  section.classList.remove('novelty--flat-open');
  section.classList.remove('novelty--es-open');
  section.classList.add('novelty--latte-open');

  sliderList.style.transform = `translateX(${-SECOND_SLIDE * sliderWidth}px)`;

  buttonRight.disabled = false;
  buttonLeft.disabled = false;
});
paginationThird.addEventListener('click', () => {
  sliderNum = 2;

  paginationFirst.classList.remove('novelty__button--active');
  paginationSecond.classList.remove('novelty__button--active');
  paginationThird.classList.add('novelty__button--active');

  section.classList.remove('novelty--flat-open');
  section.classList.add('novelty--es-open');
  section.classList.remove('novelty--latte-open');

  sliderList.style.transform = `translateX(${-THIRD_SLIDE * sliderWidth}px)`;

  buttonLeft.disabled = false;
  buttonRight.disabled = true;
});
