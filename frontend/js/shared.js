import { showNameInHeader, showTopbarMenus, showNavbarMenus } from "./funcs/shared.js";

window.addEventListener("load", () => {
  console.log("shared scrtipt run ...");
  showNameInHeader();
  showTopbarMenus();
  showNavbarMenus();
});
