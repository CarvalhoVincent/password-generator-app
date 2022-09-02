const sliderValue = document.getElementById("sliderValue");
const slider = document.getElementById("slider");
const rangeInputs = document.querySelectorAll('input[type="range"]');
const submitBtn = document.getElementById("submitBtn");


sliderValue.innerHTML = slider.value;
slider.oninput = function() {
    sliderValue.innerHTML = this.value;
}

function handleInputChange(e) {
  let target = e.target
  
  const min = target.min
  const max = target.max
  const val = target.value
  
  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}

rangeInputs.forEach(input => {
  input.addEventListener('input', handleInputChange)
})
