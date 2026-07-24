let firstnum = document.getElementById("first-num");
let secondnum = document.getElementById("second-num");
let result = document.querySelector("span");
let butCalc = document.getElementById("butCalc");

butCalc.onclick = function () {

    function divided(num1, num2) {
        return num1 / num2;
    }

    let dividedAnsw = divided(
        Number(firstnum.value),
        Number(secondnum.value)
    );

    result.textContent = dividedAnsw;
};