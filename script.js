document.getElementById("submit").addEventListener("click",numbers);
let num = 2
function numbers() {
  num = Math.random() * 6
  num = parseInt(num)
  let guess = document.getElementById('myText').value;
  if (guess == num) {
    alert('Correct');
  } 
  else {
    alert('Not matched the answer was ' + num);
  }
}