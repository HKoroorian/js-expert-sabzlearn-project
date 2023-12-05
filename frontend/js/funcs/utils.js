const showSwal = (title, icon, button, callback) => {
  swal({
    title,
    icon,
    button,
  }).then((result) => callback(result));
};

const saveIntoLocalStorage = (key, value) => {
  return localStorage.setItem(key, value);
};

const getFromLocalStorage = (key) => {
  return localStorage.getItem(key);
};

const setToken = (key, token) => {
  return saveIntoLocalStorage(key, JSON.stringify(token));
};

const getToken = (key) => {
  console.log(getFromLocalStorage(key));
  if (getFromLocalStorage(key)) {
    return JSON.parse(getFromLocalStorage(key)).token;
  } else {
    return false;
  }
};

const isLogin = () => {
  if (getToken("user")) {
    return true;
  } else {
    return false;
  }
};

const getTopbarLink = async () => {
  try {
    const res = await fetch("http://localhost:4000/v1/menus/topbar", { method: "GET" });
    const topbarLinks = await res.json();

    return topbarLinks;
  } catch (err) {
    console.log("Error getTopbarLink =>", err);
  }
};

const getAllCourses = async () => {
  console.log("getAllCourses Run ....");
  try {
    const res = await fetch("http://localhost:4000/v1/courses", { method: "GET" });
    const allCourses = await res.json();

    return allCourses;
  } catch (err) {
    console.log("Error getAllCourses =>", err);
  }
};

const starRating = (scores, emptyStarTag, fillStarTag) => {
  const emptyStar = Array(5 - scores)
    .fill(0)
    .map((score) => emptyStarTag)
    .join("");

  const fillStar = Array(scores)
    .fill(0)
    .map((score) => fillStarTag)
    .join("");

  const resultStarRating = emptyStar + fillStar;

  return resultStarRating;
};

const getPopularCourses = async () => {
  console.log("getPopularCourses Run ....");
  try {
    const res = await fetch("http://localhost:4000/v1/courses/popular", { method: "GET" });
    const popularCourses = await res.json();

    return popularCourses;
  } catch (err) {
    console.log("Error getPopularCourses =>", err);
  }
};

const getPresellCourses = async () => {
  console.log("getPresellCourses Run ....");
  try {
    const res = await fetch("http://localhost:4000/v1/courses/presell", { method: "GET" });
    const presellCourses = await res.json();

    return presellCourses;
  } catch (err) {
    console.log("Error getPresellCourses =>", err);
  }
};
const getAllArticles = async () => {
  console.log("getAllArticles Run ....");
  try {
    const res = await fetch("http://localhost:4000/v1/articles", { method: "GET" });
    const allArticles = await res.json();

    return allArticles;
  } catch (err) {
    console.log("Error getAllArticles =>", err);
  }
};
const getAllMenus = async () => {
  console.log("getAllMenus Run ....");
  try {
    const res = await fetch("http://localhost:4000/v1/menus", { method: "GET" });
    const allMenus = await res.json();

    return allMenus;
  } catch (err) {
    console.log("Error getAllMenus =>", err);
  }
};

const getUrlParam = (key) => {
  const urlParam = new URLSearchParams(window.location.search).get(key);

  return urlParam;
};

const getCategoryCourses = async (categoryName) => {
  console.log("getCategoryCourses Run ....");
  try {
    const res = await fetch(`http://localhost:4000/v1/courses/category/${categoryName}`, { method: "GET" });
    const categoryInfo = await res.json();

    return categoryInfo;
  } catch (err) {
    console.log("Error getCategoryCourses =>", err);
  }
};

const renderCoursesWithDisplayType = (courses, displayType, wrapperElem) => {
  wrapperElem.innerHTML = "";

  if (displayType === "column") {
    courses.map((course) => {
      // Use starRate Func
      const starsRate = starRating(
        course.courseAverageScore,
        '<img src="images/svgs/star.svg" alt="rating" class="course-box__star" />',
        '<img src="images/svgs/star_fill.svg" alt="rating" class="course-box__star" />'
      );
      // Render Coureses Box
      wrapperElem.insertAdjacentHTML(
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
    courses.map((course) => {
      // Use starRate Func
      const starsRate = starRating(
        course.courseAverageScore,
        '<img src="images/svgs/star.svg" alt="rating" class="course-box__star" />',
        '<img src="images/svgs/star_fill.svg" alt="rating" class="course-box__star" />'
      );
      // Render Coureses Box
      wrapperElem.insertAdjacentHTML(
        "beforeend",
        `
        <div class="col-12">
      <div class="course-box">
          <div class="course__box-header">
              <div class="course__box-right">
                  <a class="course__box-right-link" href="#">
                      <img src=http://localhost:4000/courses/covers/${course.cover} class="course__box-right-img">
                  </a>
              </div>
              <div class="course__box-left">
                  <div class="course__box-left-top">
                      <a href="#" class="course__box-left-link">${course.name}</a>
                  </div>
                  <div class="course__box-left-center">
                      <div class="course__box-left-teacher">
                          <i class="course__box-left-icon fa fa-chalkboard-teacher"></i>
                          <span class="course__box-left-name">${course.creator}</span>
                      </div>
                      <div class="course__box-left-stars">
                        ${starsRate}
                      </div>
                  </div>
                  <div class="course__box-left-bottom">
                      <div class="course__box-left-des">
                          <p>امروزه کتابخانه‌ها کد نویسی را خیلی آسان و لذت بخش تر کرده اند. به قدری
                              که
                              حتی امروزه هیچ شرکت برنامه نویسی پروژه های خود را با Vanilla Js پیاده
                              سازی
                              نمی کند و همیشه از کتابخانه ها و فریمورک های موجود استفاده می کند. پس
                              شما هم
                              اگه میخواید یک برنامه نویس عالی فرانت اند باشید، باید کتابخانه های
                              کاربردی
                              که در بازار کار استفاده می شوند را به خوبی بلد باشید</p>
                      </div>
                  </div>
                  <div class="course__box-footer">
                      <div class="course__box-footer-right">
                          <i class="course__box-footer-icon fa fa-users"></i>
                          <span class="course__box-footer-count">${course.registers}</span>
                      </div>
                      <span class="course__box-footer-left">${course.price === 0 ? "رایگان" : course.price.toLocaleString()}</span>
                  </div>
              </div>
          </div>
      </div>
  </div>`
      );
    });
  }
};

export {
  showSwal,
  setToken,
  getToken,
  isLogin,
  getTopbarLink,
  getAllCourses,
  starRating,
  getPopularCourses,
  getPresellCourses,
  getAllArticles,
  getAllMenus,
  getUrlParam,
  getCategoryCourses,
  renderCoursesWithDisplayType
};
