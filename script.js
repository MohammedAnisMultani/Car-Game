// let score = document.querySelector(".score")
// let startScreen = document.querySelector(".startScreen")
// let gameArea = document.querySelector(".gameArea")

// let keys = {
//     ArrowUp : false,
//     ArrowDown : false,
//     ArrowLeft : false,
//     ArrowRight : false

// }

// let player = {
// speed : 3,
// score : 0
// }

// startScreen.addEventListener("click", start);

// document.addEventListener("keydown", keyPress)
// document.addEventListener("keyup", keyRelease)

// function keyPress(e){
//     e.preventDefault();
//     let pressedKey = e.key;
//     if(pressedKey == "ArrowUp" || pressedKey == "ArrowDown" || pressedKey == "ArrowLeft" || pressedKey == "ArrowRight" )
//     {
//         keys[pressedKey] = true;
//     }

// }


// function keyRelease(e){
//     e.preventDefault();
//     let ReleasedKey = e.key;
//     if(ReleasedKey == "ArrowUp" || ReleasedKey == "ArrowDown" || ReleasedKey == "ArrowLeft" || ReleasedKey == "ArrowRight" )
//     {
//         keys[ReleasedKey] = false;
//     }

// }

// function gamePlay(){
//     let car = document.querySelector(".car")
//     let road = gameArea.getBoundingClientRect()

//     //calling moveLines
//     moveLines()
//     //calling moveEnemy
//     moveEnemy()
//     if(player.start){
//         if(keys.ArrowUp && player.y > road.top){
//             player.y -= player.speed;
//         }
//         if(keys.ArrowDown && player.y < road.bottom){
//             player.y += player.speed;
//         }
//         if(keys.ArrowLeft && player.x > 10){
//             player.x -= player.speed;
//         }
//         if(keys.ArrowRight && player.x < road.width - 60){
//             player.x += player.speed;
//         }
   
//     car.style.left = player.x + "px"
//     car.style.top = player.y + "px"
//     player.score++;
//     score.innerHTML = `Score ${player.score}`

//     requestAnimationFrame(gamePlay)
//     }
// }

// function moveLines(){
//     const dividers = document.querySelector(".divider")

//     dividers.forEach((divider)=>{
//         if(divider.y >=800){
//             divider.y = divider.y - 800
//         }
//         divider.y = divider.y + player.speed;
//         divider.style.top = divider.y + "px"
//     })
// }

// function moveEnemy(car){
//     const enemies = document.querySelectorAll(".enemy")
//     enemies.forEach((enemy)=>{
//         if(iscollide(car,enemy)){
//             console.log("Boom! hit")
//             endGame();
//         }
//         if(enemy.y >= 800){
//             enemy.y = enemy.y-600;
//             enemy.style.left = parseInt(Math.random()*250) + "px"
//         }
//         enemy.y = enemy.y + player.speed;
//         enemy.style.top = enemy.y + "px"
//     })
// }

// function iscollide(a,b){
//     let aRect = a.getBoundingClientRect()
//     let bRect = b.getBoundingClientRect()
//     let collideCondition = (aRect.bottom < bRect.top) || (aRect.top < bRect.bottom) || (aRect.right < bRect.left) || (aRect.left > bRect.right); 
//     return !collideCondition;
// }



// function start(){
//     startScreen.classList.add("hide")
//     gameArea.classList.add("hide")
//     player.start = true;

//     //making divider

//     for(let x=0; x<=4; x++){
//         let divider = document.createElement("div")
//         divider.className = "divider"
//         divider.y = x*200;
//         divider.style.top = divider.y + "px"
//         gameArea.append(divider)
//     }

//     requestAnimationFrame(gamePlay)
//     //lets make a car

//     let car = document.createElement("div")
//     car.innerHTML = "Car"
//     car.className = "car"
//     gameArea.append(car)

    
//     //car ki intial postion
//     player.x = car.offsetLeft;
//     player.y = car.offsetTop;

//     //creating enemy cars
//     for(let i=0; i<=2; i++){
//         let enemy = document.createElement("div")
//         enemy.className = "enemy"
//         enemy.y = (i+1)*150;
//         enemy.style.top = enemy.y + "px"
//         enemy.style.left = parseInt(Math.random()*250)+"px";
//         enemy.style.backgroundColor = "green"
//         gameArea.append(enemy)
//     }
    
// }
// function endGame(){
//     player.start = false;
//     startScreen.classList.remove("hide")
//     gameArea.classList.add("hide")
//     startScreen.innerHTML = "Game Over <br> Your final score is " + player.score + "<br> Press here to restart the game";
// }



// ------------------------------------------------
// sir's code


let score = document.querySelector('.score'); 
let startScreen = document.querySelector('.startScreen');
let gameArea = document.querySelector('.gameArea');

let keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
}

let player = {
    speed: 3,
    score: 0
}


startScreen.addEventListener('click', start);

document.addEventListener("keydown", keyPress);
document.addEventListener("keyup", keyRelease);


function keyPress(eventDetails){
    eventDetails.preventDefault();
   //  console.log("keyPress", eventDetails.key);
   let pressedKey = eventDetails.key; 

   if(pressedKey == 'ArrowUp' || pressedKey == 'ArrowDown' || pressedKey == 'ArrowLeft' || pressedKey =='ArrowRight'){
       keys[pressedKey] = true;
   }
//    console.log(keys);
}


function keyRelease(eventDetails){
       eventDetails.preventDefault();
       // console.log("key releassed", eventDetails.key);
       let releasedKey = eventDetails.key; 
   if(releasedKey == 'ArrowUp' || releasedKey == 'ArrowDown' || releasedKey == 'ArrowLeft' || releasedKey =='ArrowRight'){
       keys[releasedKey] = false;
   }
    //    console.log(keys);
   }


function gamePlay(){
   let car = document.querySelector('.car');
   let road = gameArea.getBoundingClientRect()
//    console.log(road);
  moveLines()
  moveEnemy(car)
   if(player.start){
        if(keys.ArrowUp && player.y > road.top ){
             player.y = player.y - player.speed;
        }
        if(keys.ArrowDown && player.y < road.bottom-140){
            player.y = player.y + player.speed;
        }
        if(keys.ArrowLeft  && player.x> 10){
            player.x = player.x - player.speed;
        }
        if(keys.ArrowRight  && player.x < (road.width -60)){
            player.x = player.x + player.speed;
        }

        car.style.left = player.x + 'px';
        car.style.top = player.y + 'px';

        player.score++;
        score.innerText = "Score: " + player.score;

       requestAnimationFrame(gamePlay);
   }
}

function moveLines(){
    const dividers = document.querySelectorAll('.divider');

    dividers.forEach((divider)=>{
    //    console.log("y",divider.y)

       if(divider.y >=800){
              divider.y = divider.y - 800;
       }

       divider.y = divider.y + player.speed;
       divider.style.top = divider.y + "px";
    })
}


function moveEnemy(car){
    const enemies = document.querySelectorAll('.enemy');

    enemies.forEach((enemy)=>{

         if(isCollide(car, enemy)){
                console.log('Boom! hit');
                endGame();
         }
       if(enemy.y >=800){
        enemy.y = enemy.y - 600;
        enemy.style.left = parseInt(Math.random()*250) + "px";
       }

       enemy.y = enemy.y + player.speed;
       enemy.style.top = enemy.y + "px";
    })
}


function isCollide(a,b){
   let aRect = a.getBoundingClientRect(); 
//    console.log(aRect);
    let bRect = b.getBoundingClientRect();

    let collideCondition = (aRect.bottom <bRect.top) || (aRect.top > bRect.bottom) || (aRect.right < bRect.left) || (aRect.left > bRect.right);
    return !collideCondition;
}

function endGame(){
    player.start = false;
    startScreen.classList.remove('hide');
    gameArea.classList.add('hide');
    startScreen.innerHTML = "Game Over <br> Your final score is " + player.score + "<br> Press here to restart the game";

}

function start(){
   console.log('clicked');
   // once clicked hide start screen and show game area
   startScreen.classList.add('hide');
   gameArea.classList.remove('hide');
   player.start = true;
   
   // lets make divider: 

   for(let x = 0; x<=4; x++){
       let divider = document.createElement('div');
       divider.className = 'divider';
       divider.y = x*200;
       divider.style.top = divider.y+"px"
       gameArea.append(divider);
   }

   requestAnimationFrame(gamePlay);
    
   // lets make a car: 
   let car = document.createElement('div');
    car.innerHTML = "Car";
    car.className = "car"
//    console.log(car.offsetLeft, car.offsetTop); 
    gameArea.append(car);
    player.x = car.offsetLeft; 
    player.y = car.offsetTop;
   
    for(let i = 0 ; i<=2; i++){
        let enemy = document.createElement('div');
        enemy.className = 'enemy';
        enemy.y = (i+1)*150;
        enemy.style.top = enemy.y + "px";
        enemy.style.left = parseInt(Math.random()*250) + "px";
        enemy.style.backgroundColor = "green";
        gameArea.append(enemy);
    }
}