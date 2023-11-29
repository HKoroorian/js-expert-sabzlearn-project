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

export { showSwal, setToken, getToken, isLogin };
