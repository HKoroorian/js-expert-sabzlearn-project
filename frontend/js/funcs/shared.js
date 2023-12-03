import { getme } from "../funcs/auth.js";
import { isLogin, getTopbarLink, getAllMenus } from "../funcs/utils.js";

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

const showNavbarMenus = () => {
  const menusWrapper = document.querySelector("#menus-wrapper");

  getAllMenus().then((allMenus) => {
    allMenus.map((menu) => {
      menusWrapper.insertAdjacentHTML(
        "beforeend",
        `<li class="main-header__item">
                  <a href="#" class="main-header__link"
                    >${menu.title}
                    ${
                      menu.submenus.length !== 0
                        ? `<i class="fas fa-angle-down main-header__link-icon"></i>
                    <ul class="main-header__dropwodn">
                    ${menu.submenus
                      .map(
                        (submenu) =>
                          `<li class="main-header__dropdown-item">
                      <a href="#" class="main-header__dropwodn-link">${submenu.title}</a>
                    </li>`
                      )
                      .join("")}
                    </ul>`
                        : ""
                    }
                  </a>
                </li>`
      );
    });
  });
};

export { showNameInHeader, showTopbarMenus, showNavbarMenus };
