const dateSelector = document.querySelector(".js-date-selector");

const toggleAnimation = (element) => {
  const ANIMATION_CLASS_NAME = "quick-pulse";
  const ANIMATION_DURATION = 100;
  element.classList.add(ANIMATION_CLASS_NAME);

  setTimeout(() => {
    element.classList.remove(ANIMATION_CLASS_NAME);
  }, ANIMATION_DURATION);
};

const getDateData = (element) => {
  return element.getAttribute("data-date");
};

const selectDate = (date) => {
  // process selected date - e.g. pass it to existing form
  console.log(date);
};

const handleDateSelectorClick = (e) => {
  e.preventDefault();

  let element;

  if (getDateData(e.target)) {
    element = e.target;
  } else if (getDateData(e.target.parentNode)) {
    element = e.target.parentNode;
  } else {
    return;
  }

  const date = getDateData(element);

  toggleAnimation(element);
  selectDate(date);
};

dateSelector.addEventListener("click", handleDateSelectorClick);
