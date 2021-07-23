 function ageInDays(){
    let birthYear = prompt("What year were you born.. Good friend?")
    let ageInDays = (2021 - birthYear) * 365
    let h1 = document.createElement("h1")
    h1.setAttribute("id", "ageInDays")
    let textAnswer = document.createTextNode("You are "+ ageInDays + " days old")
    h1.append(textAnswer)
    let flexBoxResult = document.getElementById("flex-box-result")
    flexBoxResult.append(h1)
}

function reset(){
   document.getElementById("ageInDays").remove()

}
 
//Challenge 2 : Cat Generator

function generateCat(){
    let myId = document.getElementById('flex-cat-gen')
    let img =  document.createElement('img')
    myId.append(img)
    img.src = 'http://thecatapi.com/api/images/get?format=src&type=gif'  
}

//Challenge 3 : RPS 

function rpsGame(yourChoice){
    let myChoice = yourChoice.id;
    console.log(myChoice)

    let computerChoice = computersRandomChoice()
    console.log(computerChoice);
    
    let results = result(myChoice, computerChoice);
    console.log(results)
    
    let finalResult = displayResult(results);
    console.log(finalResult)

    rpsFrontEnd(myChoice, computerChoice,finalResult )
}


function computersRandomChoice(){
    return ["rock", "paper", "scissor"] [Math.floor(Math.random()*3)];
}



function result(myChoice, computerChoice){
    let theResult = {
        "rock": {"rock": 0.5, "paper": 0, "scissor":1},
        "paper": {"rock": 1, "paper": 0.5, "scissor":0},
         "scissor": {"rock": 0, "paper": 1, "scissor": 0.5}
    }

    let humanScore = theResult[myChoice][computerChoice]
    let computerScore = theResult[computerChoice][myChoice]

    return [humanScore, computerScore]
}




function displayResult([humanScore, computerScore]){
    if(humanScore === 0){
        return {"message": "You Lost!", "color": "red"}
    } else if(humanScore === 1){
        return {"message": "You Won!", "color": "green"}
    } else{
        return {"message": "You Tied!", "color": "yellow"}
    }
}


function rpsFrontEnd(humanImageChoice, computerImageChoice,finalMessage ){

    let imgDataBase = {
        "rock": document.getElementById('rock').src,
        "paper": document.getElementById('paper').src,
        "scissor": document.getElementById('scissor').src
    }

document.getElementById('rock').remove()
document.getElementById('paper').remove()
document.getElementById('scissor').remove()

let humanDiv = document.createElement('div')
let computerDiv = document.createElement('div')
let messageDiv = document.createElement('div')


let humanChoiceDiv = document.getElementById('flex-box-rps-div')
humanChoiceDiv.append(humanDiv)

let messageChoiceDiv = document.getElementById('flex-box-rps-div')
messageChoiceDiv.append(messageDiv)

let computerChoiceDiv = document.getElementById('flex-box-rps-div')
computerChoiceDiv.append(computerDiv)



humanDiv.innerHTML = `<img src = "${imgDataBase[humanImageChoice]}" height= 150 width = 150 style='box-shadow: 0px 10px 20px blue; '>`
messageDiv.innerHTML = `<h1  style = "color: ${finalMessage["color"]}; font-size:60px; padding:30px"> ${finalMessage["message"]} <\h1>`
computerDiv.innerHTML = `<img src = "${imgDataBase[computerImageChoice]}" height= 150 width = 150 style='box-shadow: 0px 10px 20px red; '>`
}

// Challenge 4: Change the color
let all_buttons = document.getElementsByTagName('button')
console.log(all_buttons[0])

let myButtons = [ ];
for (let i=0; i<all_buttons.length; i++){
    myButtons.push(all_buttons[i].classList[1])
}
    console.log(myButtons)
    // console.log(myButtons[0].classList.remove('btn-primary'))

function buttonColorChange(buttonThingy){
 if (buttonThingy.value === "red"){
     buttonRed();
 } else if (buttonThingy.value === "green"){
    buttonGreen();
 } else if (buttonThingy.value === "yellow"){
     buttonYellow();
 } else if(buttonThingy.value === "reset"){
    buttonReset();
 }else if(buttonThingy.value === "random") {
     buttonRandom();
 }
}


function buttonRed(){
    for(let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add('btn-danger')
    }
}

function buttonGreen(){
    for(let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add('btn-success')
    }
}

function buttonYellow(){
    for(let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add('btn-warning')
    }
}

function buttonReset(){
    for(let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add(myButtons[i])
    }
}

function buttonRandom(){
    let choices = ["btn-primary", "btn-success", "btn-danger", "btn-warning"]

    for(let i = 0; i < all_buttons.length; i++){
        let randomNumber = Math.floor(Math.random()*4)
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add(choices[randomNumber])
    }
}
