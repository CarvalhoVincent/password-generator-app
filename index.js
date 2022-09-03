const sliderValue = document.getElementById("sliderValue");
const slider = document.getElementById("slider");
const rangeInputs = document.querySelectorAll('input[type="range"]');

/* slider */
sliderValue.innerHTML = slider.value;
slider.oninput = function() {
    sliderValue.innerHTML = this.value;
}

function handleInputChange(e) {
  let target = e.target;
  
  const min = target.min;
  const max = target.max;
  const val = target.value;
  
  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%';
}

rangeInputs.forEach(input => {
  input.addEventListener('input', handleInputChange);
});


/*    Copy to clipboard */
const copyIcon = document.getElementById("copyIcon");
const copyMsg = document.getElementById("copyMsg");

copyIcon.addEventListener("click", copyField);


function copyField() {
    /* Get the text field */
    var copyText = document.getElementById("fieldText").innerHTML;
    
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText);

    copyMsg.style.display = "initial";
};


/* Generate Password */

const generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", generate);
const fieldText = document.getElementById("fieldText");

function generate(length = 10) {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numbersChars = "0123456789";
    const symbolsChars = "@#&(§!-)^$*%+=/?";
    
    let chars = '';
    var length = slider.value;

    const uppercase = document.getElementById("inclUppercase");
    const lowercase = document.getElementById("inclLowercase");
    const numbers = document.getElementById("inclNumber");
    const symbols = document.getElementById("inclSymbol");

    if (uppercase.checked === true) {
        chars += uppercaseChars;
    } 
    if (lowercase.checked === true) {
        chars += lowercaseChars;
    }
    if (numbers.checked === true) {
        chars += numbersChars;
    }
    if (symbols.checked === true) {
        chars += symbolsChars;
    }

    let password = '';
    let passwordLength = length;
    const array = new Uint32Array(length); // Create 'unsigned' array
    window.crypto.getRandomValues(array);
    for (let i = 0; i < passwordLength; i++) {
        password += chars[array[i] % chars.length]; // % operator returns remainder of division
      }
     
    fieldText.innerHTML = password;
    fieldText.style.color = "hsl( var(--clr-almostWhite) )"

    return password;

}
