function sayHello() {
  document.querySelector("#nameT").textContent =
    "Hej " + document.querySelector("#name").value;
  document.querySelector("#ageT").textContent =
    "Du hævder du er " + document.querySelector("#age").value;
}
document.querySelector("button").addEventListener("click", sayHello);
