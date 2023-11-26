const $ = document;
// Dom Selection
const landingTitle = $.querySelector(".landing__title");
const coursesTime = $.querySelector("#couses-time");
const coursesCount = $.querySelector("#courses-count");
const clintsCount = $.querySelector("#clints-count");

// Default Variables
let maxCoursesTime = 3_320;
let maxCoursesCount = 40;
let maxClintsCount = 3_071;

window.addEventListener("load", () => {
  let landingText = "ما به هر قیمتی دوره آموزشی تولید نمی کنیم !";
  const textIndex = 0;

  typeWriter(landingText, textIndex);

  makeCounter(coursesTime, maxCoursesTime, 0, 1);
  makeCounter(coursesCount, maxCoursesCount, 0, 100);
  makeCounter(clintsCount, maxClintsCount, 0, 1);
});

// TypeWriter Func
const typeWriter = (text, index) => {
  if (index < text.length) {
    landingTitle.innerHTML += text[index];
    index++;

    setTimeout(() => {
      typeWriter(text, index);
    }, 100);
  }
};

// Interval Func
const makeCounter = (elem, maxCount, counter, delay) => {
  const interval = setInterval(() => {
    counter++;
    elem.innerHTML = counter;

    if (counter === maxCount) {
      clearInterval(interval);
    }
  }, delay);
};
