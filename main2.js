player1 = localStorage.getItem("p1");
player2 = localStorage.getItem("p2");
score1 = 0;
score2 = 0;
document.getElementById("player1").innerHTML = player1 + " : ";
document.getElementById("score1").innerHTML = score1;
document.getElementById("player2").innerHTML = player2 + " : ";
document.getElementById("score2").innerHTML = score2;
document.getElementById("perguntador").innerHTML = "turno da pergunta: " + player1;
document.getElementById("respondedor").innerHTML = "turno da resposta: " + player2;

function send() {
       n1 = document.getElementById("number1").value;
       n2 = document.getElementById("number2").value;
       resposta = parseInt(n1)*parseInt(n2);
       question_number = "<h4>" + n1 + " X "+ n2 +"</h4>";
    input_box = "<br>Resposta : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row =  question_number + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
	document.getElementById("number1").value = "";
	document.getElementById("number2").value = "";

}

questionador = "p1";
respondedor = "p2";

function check() {
    pr = document.getElementById("input_check_box").value;
    if(pr == resposta) {
        if(respondedor == "p1") {
            score1 = score1 + 1;
            document.getElementById("score1").innerHTML = score1;
        }
        else {
            score2 = score2 + 1;
            document.getElementById("score2").innerHTML = score2;
        }
    }
    if(questionador == "p1") {
        questionador =  "p2";
        document.getElementById("perguntador").innerHTML = "questionador : " + player2;
    }
    else {
        questionador =  "p1";
        document.getElementById("questionador").innerHTML = "questinador : " + player1;
    }
    if(respondedor == "p1") {
        respondedor =  "p2";
        document.getElementById("respondedor").innerHTML = "respondedor : " + player2;
    }
    else {
        respondedor =  "p1";
        document.getElementById("respondedor").innerHTML = "respondedor : " + player1;
    }
}