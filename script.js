const canvas = document.querySelector(".canvas")
let canvasSize = 16
let backgroundCanvas = 812
const clearButton = document.querySelector("#clear")
const changeSizeButton = document.querySelector("#changeSize")

changeSizeButton.addEventListener("click", changeSize)
clearButton.addEventListener("click", clearBoard)

createBoard(canvasSize)

function createBoard(canvasSize){

    for(let i = 0; i < canvasSize * canvasSize; i++){
        const div = document.createElement("div")
        div.classList.add("pixel")
        let resize = backgroundCanvas / canvasSize
        div.style.width = resize + "px" 
        div.addEventListener('mouseover',draw)
        canvas.appendChild(div)
        console.log("Div Created")
    }
    
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

function changeSize(){
    const div = document.querySelectorAll(".pixel")
    canvasSize = parseInt(prompt("What Size?"))
    console.log(canvasSize)
    clearBoard()
    deleteBoard()
    createBoard(canvasSize)
    return canvasSize
}

function deleteBoard(){
    const div = document.querySelectorAll(".pixel")
    div.forEach(element => {
        element.remove()
        
    });
}