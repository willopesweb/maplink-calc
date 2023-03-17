function showSliderValue(id, value) {
  document.getElementById(id).innerHTML = `${Number(value).toLocaleString(
    "pt-BR"
  )} rotas`;
}
