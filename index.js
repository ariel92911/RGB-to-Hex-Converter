// ----------------變數命名----------------- //
// red
const redSlider = document.querySelector('#red-silder')
const redValue = document.querySelector('#red-value')
const redOutput = document.querySelector('.red-output')

// green 
const greenSlider = document.querySelector('#green-slider')
const greenValue = document.querySelector('#green-value')
const greenOutput = document.querySelector('.green-output')

// blue 
const blueSlider = document.querySelector('#blue-slider')
const blueValue = document.querySelector('#blue-value')
const blueOutput = document.querySelector('.blue-output')

// other
//const colorValue = document.querySelector('.color-value')
const container = document.querySelector('.container-fluid')




// -------------------監聽區-------------------- //

redSlider.addEventListener('mousemove', function (event) {
  changeValue(redValue, redSlider, redOutput)
  changeBackground()
})

greenSlider.addEventListener('mousemove', function (event) {
  changeValue(greenValue, greenSlider, greenOutput)
  changeBackground()
})

blueSlider.addEventListener('mousemove', function (event) {
  changeValue(blueValue, blueSlider, blueOutput)
  changeBackground()
})




// -------------------Functions-------------------- //

// function-改變該顏色數值
function changeValue(value, slider, output) {
  value.textContent = slider.value
  if (+value.textContent < 10) {
    output.innerHTML = `0${value.textContent}`
  } else {
    output.innerHTML = (+value.textContent).toString(16)
  }
}

// function-改變背景顏色
function changeBackground() {
  let color = `#${redOutput.textContent}${greenOutput.textContent}${blueOutput.textContent}`

  container.style.background = color
  redSlider.style.background = color
  greenSlider.style.background = color
  blueSlider.style.background = color
}

