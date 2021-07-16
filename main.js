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

//******* Cat Generater *********************************************** -->
function genrateCat