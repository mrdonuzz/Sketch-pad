const sketchPad = document.getElementById('sketch-pad');
const sixteen = document.getElementById('sixteen');
const thirtyTwo = document.getElementById('thirty-two');
const sixtyFour = document.getElementById('sixty-four');
const inputNumber = document.getElementById('input-number');
const submitBtn = document.getElementById('submit-btn');
const blackMode = document.getElementById('black-mode');
const rainbowMode = document.getElementById('rainbow-mode');
const clearBtn = document.getElementById('clear-btn');
const GRID = 500
let setColor;
let isDrawing;
let changeR;


const setGrid = (numberOfGrid) => {
    sketchPad.innerHTML = '';
    for(let i = 0; i < numberOfGrid * numberOfGrid; i++) {
        const cell = document.createElement('div');
        cell.style.flexBasis = `calc(100% / ${numberOfGrid})`
        cell.classList.add('grid-item')
        // cell.style.setProperty('border', '1px solid black');
        cell.style.pointerEvents = 'auto'
        sketchPad.appendChild(cell);
    }
}

const setColorMode = (color) => {
    if (color === "black") {
        setColor = "black"
    } else if (color === "rainbow") {
        setColor = "rainbow";
    }
}

const getRainbowMode = () => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    const alpha = Math.random().toFixed(2);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

const handleMouseOver = (e) => {
    if (e.target.matches('.grid-item') && e.buttons === 1) {
        isDrawing = true;
        if (e.target.matches('.grid-item') && isDrawing) {
            e.target.style.backgroundColor = setColor === "rainbow" ? getRainbowMode() : setColor;
        }
    } else {
        isDrawing = false;
    }
}

sixteen.addEventListener("click", ()=>{
    setGrid(16);
})

thirtyTwo.addEventListener("click", ()=>{
    setGrid(32);
})

sixtyFour.addEventListener("click", ()=>{
    setGrid(64);
})

submitBtn.addEventListener("click", ()=>{
    setGrid(parseInt(inputNumber.value));
})

blackMode.addEventListener("click", () => {
    setColorMode("black")
})

rainbowMode.addEventListener( "click", () => {
    setColorMode("rainbow");
})

sketchPad.addEventListener("mouseover", handleMouseOver)
sketchPad.addEventListener("mouseout", () => {
    isDrawing = false
})

clearBtn.addEventListener("click", () => {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.style.backgroundColor = 'transparent';
    });
})