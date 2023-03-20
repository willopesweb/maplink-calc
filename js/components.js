function createAPIForm({ name, scenarios, inputs }) {
  let html = `<article class="api-content">`;
  html += `<header class="api-header">`;
  html += `<h4 class="api-title">${name}</h4>`;
  if (scenarios) {
    html += `<span data-form="${name}" class="api-add-new-case js-add-new-case">Adicionar novo cenário</span>`;
  }
  html += `</header>`;
  html += `<div id="${name}" class="api-form js-trip-form">${createAPIInputs(
    inputs
  )}</div>`;
  html += `</article>`;

  return html;
}

function createAPIInputs(inputs) {
  let html = ``;
  html = `<div class="api-case">`;
  inputs.forEach((input) => {
    html += `<label class="api-input">`;
    html += `<span class="api-input-title">${input.label}</span>`;
    if (input.type == "number") {
      html += `<input type="number" max="200" value="2">`;
    } else if (input.type == "range") {
      html += `<div class="api-input-range"><input type="range" data-value="${input.initialValue}" data-unit="${input.rangeOptions.unit}" oninput="this.dataset.value = this.value" step="${input.rangeOptions.step}" min="${input.rangeOptions.min}" max="${input.rangeOptions.max}" value="${input.initialValue}"></div>`;
    } else if (input.type == "select") {
      html += "<select>";
      input.options.forEach((option) => {
        html += `<option value="${option.value}" ${
          option.selected ? "selected" : ""
        }>${option.label}</option>`;
      });
      html += "</select>";
    }
    html += `</label>`;
  });
  html += `</div>`;

  return html;
}

export { createAPIForm, createAPIInputs };
