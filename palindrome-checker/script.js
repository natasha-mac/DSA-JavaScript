const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

checkButton.addEventListener("click", function () {
  const originalText = textInput.value;
  const checkText = textInput.value
    .toUpperCase()
    .replace(/[-_&\/\\#,+()$~%.'":*?<>{} ]/g, "");
  const reverseText = checkText.split("").reverse().join("");
  if (checkText === "") {
    alert("Please input a value");
  } else if (checkText === reverseText) {
    result.innerHTML = `${originalText} is a palindrome`;
  } else {
    result.innerHTML = `${originalText} is not a palindrome`;
  }
});
