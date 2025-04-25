alert("I ran out of time to finish this game mb")

function rock(){
    var player = "rock"
    var result = pickChoice()
    displayResult(result,player)
}
function scissors(){
    var player = "scissors"
    var result = pickChoice()
    displayResult(result,player)
}
function paper(){
    var player = "paper"
    var result = pickChoice()
    displayResult(result,player)
}

function pickChoice(){
    var choices= ["rock","paper","scissors"]
    var pick = randomLessThan(choices.length)
    return choices[0]
}

function displayResult(result, player){
    document.getElementById('game_button').hidden = true
    if (result == "rock"){
        document.getElementById('game').src =  "images/rock.jpg"
    }
    else if (result == "paper"){
        document.getElementById('game').src =  "images/paper.jpg"
    }
    else{
        document.getElementById('game').src =  "images/scissors.jpg"
    }
    
    if (result == "rock" && player == "paper"){
        document.getElementById('result').innerHTML = "You won!"
    }
    else if (result == "rock" && player == "scissors"){
        document.getElementById('result').innerHTML = "You lost!"
    }
    else if (result == "paper" && player == "scissors"){
        document.getElementById('result').innerHTML = "You won!"
    }
    else if (result == "paper" && player == "rock"){
        document.getElementById('result').innerHTML = "You lost!"
    }
    else if (result == "scissors" && player == "rock"){
        document.getElementById('result').innerHTML = "You won!"
    }
    else if (result == "scissors" && player == "paper"){
        document.getElementById('result').innerHTML = "You lost!"
    }
    else{
        document.getElementById('result').innerHTML = "You tied!"
    }
}