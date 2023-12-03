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

export { showSwal, setToken, getToken, isLogin, getTopbarLink };
