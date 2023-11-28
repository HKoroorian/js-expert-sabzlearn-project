const $ = document;

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
  }).then((res) => {
    if (res.status === 201) {
      swal({
        title: "ثبت نام با موفقیت انجام شد",
        icon: "success",
        button: "خوش آمدید",
      }).then(() => (location.href = "index.html"));
    } else if (res.status === 409) {
      swal({
        title: "نام کاربری یا ایمیل تکراری است !",
        icon: "error",
        button: "اصلاح اطلاعات",
      });
    }
  });
}

export { register };
