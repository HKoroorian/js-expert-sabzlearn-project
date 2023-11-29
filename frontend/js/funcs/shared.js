import { getme } from "../funcs/auth.js";
import { isLogin } from "../funcs/utils.js";

const showNameInHeader = () => {
  const headerProfileLinkelem = document.querySelector(".main-header__profile");
  const headerProfileTextElem = document.querySelector(".main-header__profile-text");

  if (isLogin()) {
    getme().then((data) => {
      headerProfileLinkelem.setAttribute("href", "index.html");
      headerProfileTextElem.innerHTML = data.name;
    });
  } else {
    headerProfileLinkelem.setAttribute("href", "login.html");
    headerProfileTextElem.innerHTML = "ورود / ثبت نام";
  }
};

export { showNameInHeader };
