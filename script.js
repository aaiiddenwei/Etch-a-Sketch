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
            rowEl.appendChild(squareEl)
            squareEl.addEventListener("mouseenter", (e) => e.target.classList.add("burlywood-background"))
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