import { getUrlParam, getCategoryCourses, starRating } from "./funcs/utils.js";

const $ = document;
// Dom Selection
const coursesWrapper = $.querySelector("#courses-wrapper");
const changeDisplayCoursesBtn = $.querySelectorAll(".change-display-courses-btn");

const showAllCourse = () => {
  const categoryName = getUrlParam("cat");
  getCategoryCourses(categoryName).then((allCourses) => {
    if (allCourses.length) {
      allCourses.map((course) => {
        // Use starRate Func
        const starsRate = starRating(
          course.courseAverageScore,
          '<img src="images/svgs/star.svg" alt="rating" class="course-box__star" />',
          '<img src="images/svgs/star_fill.svg" alt="rating" class="course-box__star" />'
        );
        // Render Coureses Box
        coursesWrapper.insertAdjacentHTML(
          "beforeend",
          `
          <div class="col-4">
          <div class="course-box">
            <a href="#">
              <img src=http://localhost:4000/courses/covers/${course.cover} alt="Course img" class="course-box__img" />
            </a>
            <div class="course-box__main">
              <a href="#" class="course-box__title">${course.name}</a>
      
              <div class="course-box__rating-teacher">
                <div class="course-box__teacher">
                  <i class="fas fa-chalkboard-teacher course-box__teacher-icon"></i>
                  <a href="#" class="course-box__teacher-link">${course.creator}</a>
                </div>
                <div class="course-box__rating">
                  ${starsRate}
                </div>
              </div>
      
              <div class="course-box__status">
                <div class="course-box__users">
                  <i class="fas fa-users course-box__users-icon"></i>
                  <span class="course-box__users-text">${course.registers}</span>
                </div>
                <span class="course-box__price">${course.price === 0 ? "رایگان" : course.price.toLocaleString()}</span>
              </div>
            </div>
      
            <div class="course-box__footer">
              <a href="#" class="course-box__footer-link">
                مشاهده اطلاعات
                <i class="fas fa-arrow-left course-box__footer-icon"></i>
              </a>
            </div>
          </div>
        </div>`
        );
      });
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
        event.target.classList.add("courses-top-bar__icon--active");
      });
    });
  });
};

window.addEventListener("load", () => {
  showAllCourse();
  changeDisplayCoursesHandler();
});
