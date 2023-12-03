import { getAllCourses, starRating, getPopularCourses, getPresellCourses, getAllArticles } from "./funcs/utils.js";

const $ = document;
// Dom Selection
const landingTitle = $.querySelector(".landing__title");
const coursesTime = $.querySelector("#couses-time");
const coursesCount = $.querySelector("#courses-count");
const clintsCount = $.querySelector("#clints-count");
const newestCourses = $.querySelector("#newest-courses");
const popularCoursesWrapper = $.querySelector("#popular-courses-wrapper");
const presellCoursesWrapper = $.querySelector("#presell-courses-wrapper");
const newestArticlesWrapper = $.querySelector("#newest-artilces-wrapper");

// Default Variables
let maxCoursesTime = 3_320;
let maxCoursesCount = 40;
let maxClintsCount = 3_071;

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

const showNewestCourses = () => {
  newestCourses.innerHTML = "";

  getAllCourses().then((allCourses) => {
    allCourses.slice(0, 6).map((course) => {
      // Use starRate Func
      const starsRate = starRating(
        course.courseAverageScore,
        '<img src="images/svgs/star.svg" alt="rating" class="course-box__star" />',
        '<img src="images/svgs/star_fill.svg" alt="rating" class="course-box__star" />'
      );
      // Render Coureses Box
      newestCourses.insertAdjacentHTML(
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
              </div>
      `
      );
    });
  });
};
const showPopularCourses = () => {
  popularCoursesWrapper.innerHTML = "";

  getPopularCourses().then((popularCourses) => {
    popularCourses.map((course) => {
      // Use starRate Func
      const starsRate = starRating(
        course.courseAverageScore,
        '<img src="images/svgs/star.svg" alt="rating" class="course-box__star" />',
        '<img src="images/svgs/star_fill.svg" alt="rating" class="course-box__star" />'
      );
      // Render Coureses Box
      popularCoursesWrapper.insertAdjacentHTML(
        "beforeend",
        `
      <div class="swiper-slide">
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
              </div>
      `
      );
    });
  });
};
const showPresellCourses = () => {
  presellCoursesWrapper.innerHTML = "";

  getPresellCourses().then((presellCourses) => {
    presellCourses.map((course) => {
      // Use starRate Func
      const starsRate = starRating(
        course.courseAverageScore,
        '<img src="images/svgs/star.svg" alt="rating" class="course-box__star" />',
        '<img src="images/svgs/star_fill.svg" alt="rating" class="course-box__star" />'
      );
      // Render Coureses Box
      presellCoursesWrapper.insertAdjacentHTML(
        "beforeend",
        `
        <div class="swiper-slide">
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
      </div>
      `
      );
    });
  });
};
const showNewestArticles = () => {
  newestArticlesWrapper.innerHTML = "";

  getAllArticles().then((allArticles) => {
    console.log(allArticles);
    allArticles.slice(0, 3).map((article) => {
      // Render Article Box
      newestArticlesWrapper.insertAdjacentHTML(
        "beforeend",
        `<div class="col-4">
        <div class="article-card">
          <div class="article-card__header">
            <a href="#" class="article-card__link-img">
              <img src=http://localhost:4000/courses/covers/${article.cover} class="article-card__img " alt="Article Cover" />
            </a>
          </div>
          <div class="article-card__content">
            <a href="#" class="article-card__link">${article.title}</a>
            <p class="article-card__text">${article.description}</p>
            <a href="#" class="article-card__btn">بیشتر بخوانید</a>
          </div>
        </div>
      </div>
      `
      );
    });
  });
};

window.addEventListener("load", () => {
  let landingText = "ما به هر قیمتی دوره آموزشی تولید نمی کنیم !";
  const textIndex = 0;

  typeWriter(landingText, textIndex);

  makeCounter(coursesTime, maxCoursesTime, 0, 1);
  makeCounter(coursesCount, maxCoursesCount, 0, 100);
  makeCounter(clintsCount, maxClintsCount, 0, 1);

  showNewestCourses();
  showPopularCourses();
  showPresellCourses();
  showNewestArticles();
});
