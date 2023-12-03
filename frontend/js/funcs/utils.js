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

export { showSwal, setToken, getToken, isLogin, getTopbarLink, getAllCourses, starRating };
