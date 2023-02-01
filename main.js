function add() {
    player1 = document.getElementById("jogador1").value;
    player2 = document.getElementById("jogador2").value;
    localStorage.setItem("p1", player1);
    localStorage.setItem("p2", player2);
    window.location = "index2.html";
}