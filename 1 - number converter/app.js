const decInput = document.getElementById('dec-input');
const hexInput = document.getElementById('hex-input');
const binInput = document.getElementById('bi-input');

function checkInput() {
  console.log(this.value);

  let inputText = this.value;
  let newText = inputText.replace("0", "x");
  this.value = newText;

  console.log(this.value);
}

decInput.addEventListener("input", checkInput);
hexInput.addEventListener("input", checkInput);
binInput.addEventListener("input", checkInput);