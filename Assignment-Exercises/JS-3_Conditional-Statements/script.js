function checkAge() {
  // write your code here

  let ageInput = document.getElementById("ageInput").value;
  let printResult = document.querySelector("#result");
  let category;

  if (ageInput === "") {
    printResult.innerHTML = "Invalid age. Please enter a valid number.";
    return;
  }

  ageInput = parseInt(ageInput);

  if (ageInput <= 0) {
    category = "Invalid age. Please enter a valid number.";
  } else {
    if (ageInput <= 12) {
      category = "Child";
    } else if (ageInput <= 19) {
      category = "Teenager";
    } else {
      category = "Adult";
    }
  }

  printResult.innerHTML = `You are a(n) ${category}.`;
}
