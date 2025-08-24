let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let parentDiv = document.getElementById('buttonGrid')

let letterArray = letters.split('')      //empty string as the delimiter

letterArray.forEach((letter) => {

    let button = document.createElement('button')
    button.textContent = letter

    parentDiv.appendChild(button)                 // add button to the div

    button.addEventListener('click', (event) =>{
        let pressedLatter = event.target.innerText
        // let audioPath =`./sounds/${pressedLatter}.wav`
        let audio = new Audio("./sounds/" + pressedLatter + ".wav")
        audio.play()

    })
})


//---------------------------------------------------------------------------------------------

document.addEventListener('keypress', (event) =>{
    console.log(event.key.toUpperCase())
     let pressedLatter = event.key.toUpperCase()
        // let audioPath =`./sounds/${pressedLatter}.wav`
        let audio = new Audio("./sounds/" + pressedLatter + ".wav")
        audio.play()


})