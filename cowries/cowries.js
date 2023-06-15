document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('cowries').addEventListener('click', function () {
        let rolledValue = Math.floor(Math.random() * 17)
        document.getElementById('cowries').src = `cowries/${rolledValue}.png`
        // Display the result of the roll
        document.getElementById('message').textContent = `Open: ${rolledValue}`

    })

    document.getElementById('clear').addEventListener('click', function () {
        // Reset the rolls values to zeroes
        allRolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

        // Update the scoreboard
        updateScoreboard()
    })
})
var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 