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
};
