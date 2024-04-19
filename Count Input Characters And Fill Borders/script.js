// Getting Elements
let input = document.querySelector("input");
let count = document.querySelector(".count");
let progress = document.querySelector(".progress");

// Getting Max Length Value
let maxLength = input.getAttribute("maxlength");
count.innerHTML = maxLength;
// Input Settings
// [1] Counter
input.oninput = function () {
  count.innerHTML = maxLength - this.value.length;
  count.innerHTML == 0
    ? count.classList.add("zero")
    : count.classList.remove("zero");
  // [2] Progress Settings
  progress.style.width = `${(this.value.length * 100) / maxLength}%`;
  progress.style.width == `${100}%`
    ? progress.classList.add("progressLimit")
    : progress.classList.remove("progressLimit");
};
// End TG
