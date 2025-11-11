const containerEl = document.querySelector("#container")
const newGridBtn = document.querySelector("#new-grid-btn")
let sideSquares = 16

newGridBtn.addEventListener("click", () => {
    sideSquares = getSideSquares()
    createNewGrid(sideSquares)
})

createNewGrid(sideSquares)

function createNewGrid(sidePixels) {
    containerEl.replaceChildren()
    for (let i = 0; i < sidePixels; i++) {
        const rowEl = document.createElement("div")
        rowEl.classList.add("grid-row")
        containerEl.appendChild(rowEl)
        for (let j = 0; j < sidePixels; j++) {
            const squareEl = document.createElement("div")
            squareEl.classList.add("square")
            squareEl.style.opacity = "0.1"
            rowEl.appendChild(squareEl)

            squareEl.addEventListener("mouseenter", setBackground)
        }
    }
}

function getSideSquares() {
    const promptedSideSquares = parseInt(prompt("Enter the number of squares per side for the new grid: "))
    if (promptedSideSquares > 100) {
        alert("Maximum value (100) reached!")
        return sideSquares
    } else {
        return promptedSideSquares
    }
}

function getRandomRGBColorString() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
}

function setBackground(e) {
    e.target.style.backgroundColor = getRandomRGBColorString()
    let opacity = parseFloat(e.target.style.opacity)
    if (opacity < 1) {
        opacity += 0.1
    }
    e.target.style.opacity = opacity.toString()
}