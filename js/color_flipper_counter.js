// A colors variable, an array with the values
const colors = ["green", "red", "rgba(133, 122, 200)", "#f1f5f8"];
// target the button
const btn = document.getElementById("btn1");
//target the span with the class color
const color = document.querySelector(".color");

// the event listener that will call the function once we click
btn.addEventListener("click", function () {
  //get a random number between 0 and 3, the length of the color array
  const randomNumber = getRandomNumber();

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

// function to generate the random number between 0 and 3
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
