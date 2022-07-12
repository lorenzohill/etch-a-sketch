function main(){
    
}

const canvas = document.querySelector(".canvas")

for(let i = 0; i < 50; i++){
    const div = document.createElement("div")
    div.classList.add("pixel")
    canvas.appendChild(div)
    console.log("Div Created")
}