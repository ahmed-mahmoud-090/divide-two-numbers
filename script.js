let firstnum = document.getElementById("first-num");
let secondnum = document.getElementById("second-num");
let result = document.querySelector("span");
let butCalc = document.getElementById("butCalc");

butCalc.onclick = function () {

    function divided(num1, num2) {
        if(num2==0){
            alert("you can't divided by zero");
            return "unknown";
        }
        return num1 / num2;
    }

    let dividedAnsw = divided(
        Number(firstnum.value),
        Number(secondnum.value)
    );

    if(dividedAnsw !="unknown"){
        result.textContent=dividedAnsw;
    }
    
};
