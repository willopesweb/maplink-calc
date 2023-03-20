import apis from "./js/apis.js";
import { createAPIForm, createAPIInputs } from "./js/components.js";

const platformContent = document.getElementById("platform");
let newCasesButton;
document.addEventListener("DOMContentLoaded", () => {
  apis.forEach((api) => {
    platformContent.innerHTML += createAPIForm(api);
  });

  newCasesButton = document.querySelectorAll(".js-add-new-case");
  newCasesButton.forEach((btn) => {
    btn.addEventListener("click", () => {
      let name = btn.dataset.form;
      let inputs = apis.filter((api) => api.name == name)[0].inputs;
      document
        .getElementById(name)
        .insertAdjacentHTML("afterend", createAPIInputs(inputs));
    });
  });

  function showSliderValue(id, value, text) {
    document.getElementById(id).innerHTML = `${Number(value).toLocaleString(
      "pt-BR"
    )} ${text}`;
  }
});

/* const tripForm = document.querySelector(".js-trip-form");
document.addEventListener("DOMContentLoaded", () => {
  tripForm.innerHTML = createForm(tripInputs);
  console.log(apis);
}); */

/* document.querySelector(".js-add-trip-case").addEventListener("click", () => {
  tripForm.innerHTML += createForm(tripInputs);
}); */
