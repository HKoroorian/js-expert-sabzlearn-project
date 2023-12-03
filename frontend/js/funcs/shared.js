import { getme } from "../funcs/auth.js";
import { isLogin, getTopbarLink } from "../funcs/utils.js";

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

const showTopbarMenus = () => {
  const topbarMenuList = document.querySelector(".top-bar__menu");
  topbarMenuList.innerHTML = "";

  getTopbarLink().then((topbarLinks) => {
    const randomTopbarLinks = topbarLinks.sort(() => Math.random() - 0.5);
    randomTopbarLinks.slice(0, 6).map((topbarLink) => {
      topbarMenuList.insertAdjacentHTML(
        "beforeend",
        `
      <li class="top-bar__item">
      <a href="${topbarLink.href}" class="top-bar__link">${topbarLink.title}</a>
    </li>
      `
      );
    });
  });
};

export { showNameInHeader, showTopbarMenus };
