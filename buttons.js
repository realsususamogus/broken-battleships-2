function buttonSetup() {
  startgame = createButton("Start Game")
  startgame.addClass("mybutton")
  startgame.position(width/2 - 120, height/2 -100)
  startgame.mousePressed(startGame)
  startgame.size(250,200)
  startgame.mouseOver(changecolor1)
  startgame.mouseOut(changecolor12)
  
  easy = createButton("easy")
  easy.addClass("mybutton2")
  easy.position(width/5 - 50, height - 100)
  easy.mousePressed(setEasy)
  easy.mouseOver(changecolor3)
  easy.mouseOut(changecolor32)
  
  regular = createButton("regular")
  regular.addClass("mybutton2")
  regular.position(width/2 - 70, height - 100)
  regular.mousePressed(setRegular)
  regular.mouseOver(changecolor4)
  regular.mouseOut(changecolor42)
  
  hard = createButton("hard")
  hard.addClass("mybutton2")
  hard.position(width - 150, height - 100)
  hard.mousePressed(setHard)
  hard.mouseOver(changecolor5)
  hard.mouseOut(changecolor52)
}

function changecolor1() {
  startgame.style(
    "background-image",
    "radial-gradient(circle, #ffff00 , #2bff00)"
  );
  startgame.style(
    "box-shadow",
    "0 12px 16px 0 rgba(0,0,0,0.24), 0 40px 50px 0 rgba(0,0,0,0.19)"
  );
  startgame.style("transition-duration", "0.5s");
  
}
function changecolor12() {
  startgame.style("background-image", "linear-gradient(red, yellow)");
  startgame.style("box-shadow", "none");
}

function changecolor2() {
  btngo.style(
    "background-image",
    "radial-gradient(circle, #ffff00 , #2bff00)"
  );
  btngo.style(
    "box-shadow",
    "0 12px 16px 0 rgba(0,0,0,0.24), 0 40px 50px 0 rgba(0,0,0,0.19)"
  );
  btngo.style("transition-duration", "0.5s");
  
}

function changecolor22() {
  btngo.style("background-image", "linear-gradient(red, yellow)");
  btngo.style("box-shadow", "none");
}

function changecolor3() {
  easy.style(
    "background-image",
    "radial-gradient(circle, #ffff00 , #2bff00)"
  );
  easy.style(
    "box-shadow",
    "0 12px 16px 0 rgba(0,0,0,0.24), 0 40px 50px 0 rgba(0,0,0,0.19)"
  );
  easy.style("transition-duration", "0.5s");
  
}

function changecolor32() {
  easy.style("background-image", "linear-gradient(red, yellow)");
  easy.style("box-shadow", "none");
}

function changecolor4() {
  regular.style(
    "background-image",
    "radial-gradient(circle, #ffff00 , #2bff00)"
  );
  regular.style(
    "box-shadow",
    "0 12px 16px 0 rgba(0,0,0,0.24), 0 40px 50px 0 rgba(0,0,0,0.19)"
  );
  regular.style("transition-duration", "0.5s");
  
}

function changecolor42() {
  regular.style("background-image", "linear-gradient(red, yellow)");
  regular.style("box-shadow", "none");
}

function changecolor5() {
  hard.style(
    "background-image",
    "radial-gradient(circle, #ffff00 , #2bff00)"
  );
  hard.style(
    "box-shadow",
    "0 12px 16px 0 rgba(0,0,0,0.24), 0 40px 50px 0 rgba(0,0,0,0.19)"
  );
  hard.style("transition-duration", "0.5s");
  
}

function changecolor52() {
  hard.style("background-image", "linear-gradient(red, yellow)");
  hard.style("box-shadow", "none");
}
