const $ = document;
const landingTitle = $.querySelector(".landing__title");

console.log(landingTitle);

window.addEventListener("load", () => {
  let landingText = "ما به هر قیمتی دوره آموزشی تولید نمی کنیم !";
  const textIndex = 0;

  typeWriter(landingText, textIndex);
});

const typeWriter = (text, index) => {
  if (index < text.length) {
    landingTitle.innerHTML += text[index];
    index++;

    setTimeout(() => {
      typeWriter(text, index);
    }, 100);
  }
};
