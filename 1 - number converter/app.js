const decInput = document.getElementById('dec-input');
const hexInput = document.getElementById('hex-input');
const biInput = document.getElementById('bi-input');

const globWarn = document.getElementById('glob-warn');
const decWarn = document.getElementById('dec-warn');
const hexWarn = document.getElementById('hex-warn');
const biWarn = document.getElementById('bi-warn');

decWarn.innerText = "";

function checkInput() {
  // console.log(this.value);
  // console.log(this.value.length);

  if (this.value.length >= 100) {
    globWarn.innerText = "Your number is too big or your text is too long";
  }

  if (this.id === "dec-input") {
    const reg = /[^\d]/g;

    let inputText = this.value;
    let newText = "";

    if (inputText.search(reg) != -1) {
      decWarn.innerText = "Only decimal number allow (0-9)";

      newText = inputText.replaceAll(reg, "");

      this.value = newText;
    } else {
      decWarn.innerText = "";

      biInput.value = decToBinary(inputText);
    }


  } else if (this.id === "hex-input") {
    const reg = /[^0-9a-f]/g;

    let inputText = this.value;
    let newText = "";

    if (inputText.search(reg) != -1) {
      hexWarn.innerText = "Only hexidecimal number allow (0-9 and A-F (case-insensitive))";

      newText = inputText.replaceAll(reg, "");

      this.value = newText;
    } else {
      hexWarn.innerText = "";
    }
  } else if (this.id === "bi-input") {
    const reg = /[^0-1]/g;

    let inputText = this.value;
    let newText = "";

    if (inputText.search(reg) != -1) {
      biWarn.innerText = "Only binary number allow (0 and 1)";

      newText = inputText.replaceAll(reg, "");

      this.value = newText;
    } else {
      biWarn.innerText = "";
    }
  }
}

function decToBinary(decVal, fullBinary = "") {
  // console.log(decVal);

  // TODO: Added edge case to catch number 0 (right now if 0 enter it will result with an empty string)


  if (decVal / 2 === 0) {
    console.log(fullBinary);
    console.log("===");
    return fullBinary;
  } else if (decVal / 2 === 1) {
    // console.log(decVal / 2);
    // console.log(decVal % 2);
    fullBinary = `${decVal / 2}${decVal % 2}${fullBinary}`;
    console.log(fullBinary);
    console.log("===");
    return fullBinary;
  }

  // console.log(decVal % 2);
  fullBinary = (decVal % 2) + fullBinary;
  // console.log(fullBinary);
  return decToBinary(Math.trunc(decVal / 2), fullBinary);
}

function decToHex() {
  // TODO: Added functionality
}

function hexToDec() {
  // TODO: Added functionality
}

function hexToBinary() {
  // TODO: Added functionality
}

function binaryToDec() {
  // TODO: Added functionality
}

function binaryToHex() {
  // TODO: Added functionality
}


decInput.addEventListener("input", checkInput);
hexInput.addEventListener("input", checkInput);
biInput.addEventListener("input", checkInput);


module.exports({ decToBinary });