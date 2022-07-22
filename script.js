const canvas = document.querySelector(".canvas")
let canvasSize = 16
let backgroundCanvas = 812
const clearButton = document.querySelector("#clear")
const changeSizeButton = document.querySelector("#changeSize")
const blackPixel = document.querySelector("#blackPixel")
const randomColor = document.querySelector("#randomColor")
const darken = document.querySelector("#darken")

changeSizeButton.addEventListener("click", changeSize)
clearButton.addEventListener("click", clearBoard)
blackPixel.addEventListener("click", notImplemented)
randomColor.addEventListener("click", notImplemented)
darken.addEventListener("click", notImplemented)

createBoard(canvasSize)

function createBoard(canvasSize){
    canvasSize = Math.abs(canvasSize)
    if (canvasSize<=100){
        for(let i = 0; i < canvasSize * canvasSize; i++){
            const div = document.createElement("div")
            div.classList.add("pixel")
            let resize = backgroundCanvas / canvasSize
            div.style.width = resize + "px" 
            div.addEventListener('mouseover',draw)
            canvas.appendChild(div)
            console.log("Div Created")
    }} else if (canvasSize <= 0 ) {
        alert("Cannot be 0 or less! Please enter a positive number between 0 and 100")
        createBoard(1)
    } else {
        alert("Cannot be more than 100! Please enter a positive number between 1 and 100")
        createBoard(1)
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

function notImplemented(){
    alert("This function has not been implemented yet.")
}