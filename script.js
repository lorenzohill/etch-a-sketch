const canvas = document.querySelector(".canvas")
const canvasSize = 812
const clearButton = document.querySelector("#clear")

clearButton.addEventListener("click", clearBoard)

for(let i = 0; i < 11128; i++){
    const div = document.createElement("div")
    div.classList.add("pixel")
    div.addEventListener('mouseover',draw)
    canvas.appendChild(div)
    console.log("Div Created")
}


function draw(Event){
    const div = document.querySelector("div")
    Event.target.classList.add("dark")
}

function clearBoard(){
    const div = document.querySelectorAll(".pixel")
    div.forEach(element => { element.classList.remove("dark")
        
    });
}