// Criar variáveis da DOM 
var div_container = document.getElementsByClassName("content")[0];
var input = div_container.getElementsByClassName("input")[0];
var button = div_container.getElementsByClassName("button")[0];
var answer = div_container.getElementsByClassName("answer")[0];

// Retorna <, > ou = dependendo de uma comparação
function lessThanBiggerThan(num, compare)
{
    if(num < compare)
    {
        return "<";
    }
    else if(num > compare)
    {
        return ">";
    }
    else
    {
        return "=";
    }
}

// Mostra o resultado da comparação na tela
function buttonClick()
{
    var userNumber = +input.value;
    var answerText = lessThanBiggerThan(userNumber, 10);
    answer.innerHTML = answerText;
}

// Initialization
button.onclick = buttonClick;