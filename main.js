
function cleanResult(){
    document.querySelector("#result").innerHTML = "";
    document.querySelector("#numberExpression").innerHTML = "";
}

function insert(num){
    let numero = document.querySelector("#numberExpression").innerHTML;
    numberExpression.innerHTML = numero + num;
}

function cleanNumbers(){
    let cleanNumber = document.querySelector("#numberExpression").innerHTML;
    document.querySelector("#numberExpression").innerHTML = cleanNumber.substring(0, cleanNumber.length -1);
}

function calculation(){
    let result = document.querySelector("#numberExpression").innerHTML;
    if(result){
        document.querySelector("#numberExpression").innerHTML = eval(result);
        document.querySelector("#result").innerHTML = eval(result);
    }else{
        document.querySelector("#result").innerHTML = "Nada a Calcular";
    }
}