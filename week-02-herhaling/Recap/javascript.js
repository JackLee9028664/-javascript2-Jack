let input = document.getElementById("input")
let output = document.getElementById("output")
let button = document.getElementById("btn")

button.addEventListener("click", function(){
btn.style.background = "green";
   output.style.color = "green";
    output.textContent = input.Value;
    
    output.innerText = input;
    input.value = "";
})

let input1 = document.getElementById("input1")
let input2 = document.getElementById("input2")
let buttoncalc = document.getElementById("buttoncalc")
let calc = document.getElementById("calc")

buttoncalc.addEventListener("click", function() {
    calc.textContent = calculater(input1.value, input2.value);
    
})

function calculater(a, b ) {
   return a + b;
}