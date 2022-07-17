const canvas = document.querySelector(".canvas")
const canvasSize = 812

for(let i = 0; i < 128; i++){
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
