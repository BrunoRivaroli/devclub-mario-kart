const form = document.querySelector(".box-form")
const mask = document.querySelector(".mask-form")

function showform() {
  form.style.left = '50%';
  form.style.transform = "translateX(-50%)";
  mask.style.visibility = "visible"
}

function hideform() {
  form.style.left = "-330px";
  form.style.transform = "translateX(0)";
  mask.style.visibility = "hidden"
}

