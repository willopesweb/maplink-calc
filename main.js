function showSliderValue(id, value, text) {
  document.getElementById(id).innerHTML = `${Number(value).toLocaleString(
    "pt-BR"
  )} ${text}`;
}
