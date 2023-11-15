let currMoleTile;
let currPlantTile;
let score = 10;
let gameOver = false;
let moleClicked = false;




window.onload = function () {
    SetGame();

}

function SetGame() {
    //set up the grid for the game board in html
    for (let i = 0; i < 9; i++) {   //i goes from 0 to 8 ,stops at 9
        //<div id=0 to 8></div>
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile)
        document.getElementById("board").appendChild(tile);


    }


    setInterval(setMole, 2000); //2000 milliseconds which is 2 seconds
    setInterval(setPlant, 1000)


}


function getRandomTile() {
    //math random...> (0 to 1)*9=(0 to 9)--> round down to (0 to 8)//
    let num = Math.floor(Math.random() * 9);
    return num.toString();




}


function setMole() {

    if (gameOver) {
        return;
    }
    if (moleClicked == false) {

        score -= 10;
        document.getElementById("score").innerText = score.toString();
        if (score < 0) {
            document.getElementById("score").innerText = "GAME OVER";
            gameOver = true;
            return

        }


    }
    moleClicked = false;

    if (currMoleTile) {
        currMoleTile.innerHTML = ""
    }

    let mole = document.createElement("img")
    mole.src = "./mole.jpg"

    let num = getRandomTile();
    if (currPlantTile && currPlantTile.id == num) {
        return;
    }
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);

}

function setPlant() {
    if (gameOver) {
        return;
    }
    if (currPlantTile) {
        currPlantTile.innerHTML = ""
    }

    let plant = document.createElement("img");
    plant.src = "./plant.png"

    let num = getRandomTile();
    if (currMoleTile && currMoleTile.id == num) {
        return;
    }
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);



}


function selectTile() {


    if (gameOver) {
        return;



    }
    if (this == currMoleTile) {
        score += 10;
        moleClicked = true
        document.getElementById("score").innerText = score.toString();



    }

    else if (this == currPlantTile) {

        document.getElementById("score").innerText = "GAME OVER: Your score " + score.toString();
        gameOver = true;
    }



}
