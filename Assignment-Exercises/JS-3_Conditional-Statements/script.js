function checkAge() {
  // write your code here
  let ageInput = document.getElementById("ageInput").value;
  let category;

  if (ageInput === "") return;

  ageInput = parseInt(ageInput);

  if (ageInput <= 0) {
    category = "Invalid age. Please enter a valid number.";
  } else if (ageInput <= 12) {
    category = "You are a(n) Child";
  } else if (ageInput <= 19) {
    category = "You are a(n) Teenager";
  } else {
    category = "You are a(n) Adult";
  }

  document.querySelector("#result").innerHTML = category;
}
