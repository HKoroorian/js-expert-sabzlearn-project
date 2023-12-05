import { getUrlParam, getCategoryCourses, renderCoursesWithDisplayType, coursesFiltering } from "./funcs/utils.js";

const $ = document;
// Dom Selection
const coursesWrapper = $.querySelector("#courses-wrapper");
const changeDisplayCoursesBtn = $.querySelectorAll(".change-display-courses-btn");
const coursesFilteringMethodSelectionElems = $.querySelectorAll(".courses-top-bar__selection-item");
const coursesFilteringMethodTextElem = $.querySelector(".courses-top-bar__selection-text");

// Default Variables
let allCourses = [];
let coursesDisplayType = "column";
let selectedCourses = [];

// Funcs ...

const showAllCourse = () => {
  const categoryName = getUrlParam("cat");
  getCategoryCourses(categoryName).then((courses) => {
    allCourses = [...courses];
    selectedCourses = [...courses];
    if (courses.length) {
      renderCoursesWithDisplayType(courses, coursesDisplayType, coursesWrapper);
    } else {
      coursesWrapper.insertAdjacentHTML("beforeend", '<div class="alert alert-danger">هیچ دورهای برای این دسته بندی وجود ندارد !</div>');
    }
  });
};

const changeDisplayCoursesHandler = () => {
  changeDisplayCoursesBtn.forEach((changeBtn) => {
    changeBtn.addEventListener("click", (event) => {
      changeDisplayCoursesBtn.forEach((btn) => {
        btn.classList.remove("courses-top-bar__icon--active");
      });
      changeBtn.classList.add("courses-top-bar__icon--active");

      if (String(changeBtn.className).includes("column")) {
        coursesDisplayType = "column";
        renderCoursesWithDisplayType(selectedCourses, coursesDisplayType, coursesWrapper);
      } else {
        coursesDisplayType = "row";
        renderCoursesWithDisplayType(selectedCourses, coursesDisplayType, coursesWrapper);
      }
    });
  });
};

coursesFilteringMethodSelectionElems.forEach((item) => {
  item.addEventListener("click", (event) => {
    let filtetingMethod = event.target.dataset.key;

    coursesFilteringMethodSelectionElems.forEach((methodText) => {
      methodText.classList.remove("courses-top-bar__selection-item--active");
    });

    event.target.classList.add("courses-top-bar__selection-item--active");

    coursesFilteringMethodTextElem.innerHTML = event.target.innerHTML;

    selectedCourses = coursesFiltering(allCourses, filtetingMethod);
    renderCoursesWithDisplayType(selectedCourses, coursesDisplayType, coursesWrapper);
  });
});

window.addEventListener("load", () => {
  showAllCourse();
  changeDisplayCoursesHandler();
});
