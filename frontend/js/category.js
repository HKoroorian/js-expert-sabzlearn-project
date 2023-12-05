import { getUrlParam, getCategoryCourses, renderCoursesWithDisplayType } from "./funcs/utils.js";

const $ = document;
// Dom Selection
const coursesWrapper = $.querySelector("#courses-wrapper");
const changeDisplayCoursesBtn = $.querySelectorAll(".change-display-courses-btn");

let allCourses = [];
let coursesDisplayType = "column";

const showAllCourse = () => {
  const categoryName = getUrlParam("cat");
  getCategoryCourses(categoryName).then((courses) => {
    allCourses = [...courses];
    if (courses.length) {
      renderCoursesWithDisplayType(courses, coursesDisplayType, coursesWrapper);
    } else {
      coursesWrapper.insertAdjacentHTML("beforeend", '<div class="alert alert-danger">هیچ دورهای برای این دسته بندی وجود ندارد !</div>');
    }
  });
};

const changeDisplayCoursesHandler = () => {
  changeDisplayCoursesBtn.forEach((changeBtn) => {
    console.log(changeBtn);
    changeBtn.addEventListener("click", (event) => {
      changeDisplayCoursesBtn.forEach((btn) => {
        btn.classList.remove("courses-top-bar__icon--active");
      });
      changeBtn.classList.add("courses-top-bar__icon--active");

      if (String(changeBtn.className).includes("column")) {
        coursesDisplayType = "column";
        renderCoursesWithDisplayType(allCourses, coursesDisplayType, coursesWrapper);
      } else {
        coursesDisplayType = "row";
        renderCoursesWithDisplayType(allCourses, coursesDisplayType, coursesWrapper);
      }
    });
  });
};

window.addEventListener("load", () => {
  showAllCourse();
  changeDisplayCoursesHandler();
});
