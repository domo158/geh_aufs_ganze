let choice;

let hasChosen = false;
let prizeNum = random();
// console.log(prizeNum);


$("document").ready(function() {
  startGame();
});

$("#btnStart").click(function(){
  startGame();
});

$("#btn1").click(function(e) {
  // console.log(e.target.value);
  choice = e.target.value;
  if(!hasChosen) {
    $("#doorNumber").html(e.target.value);
    hasChosen = true;
    hideDoor(choice, prizeNum);
    $("#exampleModal").modal("show");
  } else if(choice == prizeNum){
    $("#resultModalLabel").html("Sie haben gewonnen!");
    $("#resultModal").modal("show");
  } else {
    $("#resultModalLabel").html("Sie haben leider verloren!");
    $("#resultModal").modal("show");
  }
});

$("#btn2").click(function(e) {
  // console.log(e.target.value);
  choice = e.target.value;
  if(!hasChosen) {
    $("#doorNumber").html(e.target.value);
    hasChosen = true;
    hideDoor(choice, prizeNum);
    $("#exampleModal").modal("show");
  } else if(choice == prizeNum){
    $("#resultModalLabel").html("Sie haben gewonnen!");
    $("#resultModal").modal("show");
  } else {
    $("#resultModalLabel").html("Sie haben leider verloren!");
    $("#resultModal").modal("show");
  }
});

$("#btn3").click(function(e) {
  // console.log(e.target.value);
  choice = e.target.value;
  if(!hasChosen) {
    $("#doorNumber").html(e.target.value);
    hasChosen = true;
    hideDoor(choice, prizeNum);
    $("#exampleModal").modal("show");
  } else if(choice == prizeNum){
    $("#resultModalLabel").html("Sie haben gewonnen!");
    $("#resultModal").modal("show");
  } else {
    $("#resultModalLabel").html("Sie haben leider verloren!");
    $("#resultModal").modal("show");
  }
});

$("#resultBtn").click(function(e){
  startGame();
});

function startGame() {
  //Start Game
  // display the doors
  $(".card").show();
  $("#btnStart").html("Neues Spiel?");
  hasChosen = false;
}

function random() {
  return Math.floor(Math.random() * 3) + 1;
}

function hideDoor(choice, prizeNum){
  let toHide;
  for(let i = 1; i <=3; i++){
    if(choice != i && prizeNum != i) {
      toHide = i;
      $(".modal-body").html(
        "Sie haben Tür "+ choice+" ausgewählt. Hinter der Tür " + i + 
        " war kein Preis. " + "Bleiben Sie bei Ihrer wahl oder ändern Sie ihre Tür?"
        );
      }
    }
  switch(toHide) {
    case 1:
      $("#door1").fadeOut();
      break;
    case 2:
      $("#door2").fadeOut();
      break;
    case 3:
      $("#door3").fadeOut();
      break;
  } 
}
 