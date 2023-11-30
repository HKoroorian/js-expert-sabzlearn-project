import { showSwal, setToken, getToken } from "./utils.js";

const $ = document;

// Register Handler
function register() {
  const nameInput = $.querySelector("#name");
  const usernameInput = $.querySelector("#username");
  const emailInput = $.querySelector("#email");
  const phoneInput = $.querySelector("#phone");
  const passwordInput = $.querySelector("#password");

  let newUserInfos = {
    name: nameInput.value.trim(),
    username: usernameInput.value.trim(),
    email: emailInput.value.trim(),
    phone: phoneInput.value.trim(),
    password: passwordInput.value.trim(),
    confirmPassword: passwordInput.value.trim(),
  };

  fetch("http://localhost:4000/v1/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUserInfos),
  })
    .then((res) => {
      if (res.status === 201) {
        showSwal("ثبت نام با موفقیت انجام شد", "success", "خوش آمدید", (result) => (location.href = "index.html"));
        setToken("user", { token: res.accessToken });
      } else if (res.status === 409) {
        showSwal("نام کاربری یا ایمیل تکراری است", "error", "اصلاح اطلاعات", () => {});
      } else if (res.status === 400) {
        showSwal("تمام موارد خواسته شده را پر کنید", "error", "تکمیل اطلاعات", () => {});
      }
      return res.json();
    })
    .then((result) => {
      console.log(result);
      if (result.accessToken) {
        setToken("user", { token: result.accessToken });
      }
    });
}

// Login Handler
function login() {
  const identifierInput = $.querySelector("#identifier");
  const passwordInput = $.querySelector("#password");

  const userInfos = {
    identifier: identifierInput.value.trim(),
    password: passwordInput.value.trim(),
  };

  fetch("http://localhost:4000/v1/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userInfos),
  })
    .then((res) => {
      console.log(res);
      if (res.status === 200) {
        showSwal("با موفقیت وارد شدید", "success", "خوش آمدید", (result) => (location.href = "index.html"));
      } else if (res.status === 400) {
        showSwal("تمام موارد خواسته شده را پر کنید", "error", "تکمیل اطلاعات", () => {});
      } else if (res.status === 401) {
        showSwal("کاربری با این مشخصات یافت نشد", "error", "اصلاح اطلاعات", () => {});
      }
      return res.json();
    })
    .then((result) => {
      console.log(result);
      if (result.accessToken) {
        setToken("user", { token: result.accessToken });
      }
    });
}

const getme = async () => {
  const token = getToken("user");

  if (!token) {
    console.log("token not exist !");
    return false;
  }
  try {
    const res = await fetch("http://localhost:4000/v1/auth/me", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await res.json();
    return data;
  } catch (err) {
    console.log("Error Message =>", err);
  }
};

export { register, login, getme };
