const decInput = document.getElementById('dec-input');
const hexInput = document.getElementById('hex-input');
const biInput = document.getElementById('bi-input');

const globWarn = document.getElementById('glob-warn');
const decWarn = document.getElementById('dec-warn');
const hexWarn = document.getElementById('hex-warn');
const biWarn = document.getElementById('bi-warn');

decWarn.innerText = "";

function checkInput() {
  console.log(this.value);
  console.log(this.value.length);

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

  // TODO actual calculation
}

decInput.addEventListener("input", checkInput);
hexInput.addEventListener("input", checkInput);
biInput.addEventListener("input", checkInput);