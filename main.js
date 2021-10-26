 function log(){
    
    player_1_name = document.getElementById("player1name").value;
    player_2_name = document.getElementById("player2name").value;
    
    localStorage.setItem("player1_name", player_1_name);
    localStorage.setItem("player2_name", player_2_name);
    
    window.location = "game.html";
 }
     
 