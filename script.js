function generateTable() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let root = document.getElementById("root");
  let mul = "";
  for (let i = 1; i <= num2; i++) {
    mul += `${num1} x ${i} = ${num1 * i}<br>`;
  }
  root.innerHTML = mul;
}
