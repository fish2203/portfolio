//개발중...
const fioreEl = document.getElementById('fiore');
const starbucksEl = document.getElementById('starbucks');
const pageDescriptionEl = document.getElementsByClassName('description');

fioreEl.addEventListener('mouseover', function (e) {
  fioreEl.classList.add('focused');
  e.pageDescriptionEl.style.back = fioreEl.style.color;
});