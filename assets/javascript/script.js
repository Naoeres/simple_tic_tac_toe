const r = document.documentElement;
const tds = document.querySelectorAll("td");
const table = document.querySelector("table");

let leftTop = document.querySelector("#left-top");
let centerTop = document.querySelector("#center-top");
let rightTop = document.querySelector("#right-top");

let leftCenter = document.querySelector("#left-center");
let centerCenter = document.querySelector("#center-center");
let rightCenter = document.querySelector("#right-center");

let leftBottom = document.querySelector("#left-bottom");
let centerBottom = document.querySelector("#center-bottom");
let rightBottom = document.querySelector("#right-bottom");

const color = document.querySelector("input");

const h1 = document.querySelector('div > h1');

let count = 0;
let letter;

color.addEventListener("change", (e) => {
    if (color.value !== "#000000")
        r.style.setProperty("--page-color", color.value);
});

tds.forEach((e) => {
    e.addEventListener("click", () => {
        if (!table.classList.contains("winner")) {
            const img = document.createElement("img");
            if (e.innerHTML === "") {
                if (count % 2 === 0) {
                    img.setAttribute("src", "../assets/images/x.svg");
                    e.appendChild(img);
                    letter = "x";
                    e.classList.add(letter);
                    console.log(letter);
                } else {
                    img.setAttribute("src", "../assets/images/o.svg");
                    e.appendChild(img);
                    letter = "o";
                    e.classList.add(letter);
                    console.log(letter);
                }
                count++;
            }
            winner(letter);
        }
    });
});

function winner(letter) {
    if (count <= 9) {
        if (
            leftTop.classList.contains(letter) &&
            centerTop.classList.contains(letter) &&
            rightTop.classList.contains(letter)
        ) {
            table.classList.add("winner");
            displayResult()
            h1.innerHTML = `Winner is ${letter.toUpperCase()}`;
        } else if (
            leftCenter.classList.contains(letter) &&
            centerCenter.classList.contains(letter) &&
            rightCenter.classList.contains(letter)
        ) {
            table.classList.add("winner");
            displayResult()
            h1.innerHTML = `Winner is ${letter.toUpperCase()}`;
        } else if (
            leftBottom.classList.contains(letter) &&
            centerBottom.classList.contains(letter) &&
            rightBottom.classList.contains(letter)
        ) {
            table.classList.add("winner");
            displayResult()
            h1.innerHTML = `Winner is ${letter.toUpperCase()}`;
        } else if (
            leftTop.classList.contains(letter) &&
            leftCenter.classList.contains(letter) &&
            leftBottom.classList.contains(letter)
        ) {
            table.classList.add("winner");
            displayResult()
            h1.innerHTML = `Winner is ${letter.toUpperCase()}`;
        } else if (
            rightBottom.classList.contains(letter) &&
            rightCenter.classList.contains(letter) &&
            rightTop.classList.contains(letter)
        ) {
            table.classList.add("winner");
            displayResult()
            h1.innerHTML = `Winner is ${letter.toUpperCase()}`;
        } else if (
            centerTop.classList.contains(letter) &&
            centerCenter.classList.contains(letter) &&
            centerBottom.classList.contains(letter)
        ) {
            table.classList.add("winner");
            displayResult()
            h1.innerHTML = `Winner is ${letter.toUpperCase()}`;
        } else if (
            leftBottom.classList.contains(letter) &&
            centerCenter.classList.contains(letter) &&
            rightTop.classList.contains(letter)
        ) {
            table.classList.add("winner");
            displayResult()
            h1.innerHTML = `Winner is ${letter.toUpperCase()}`;
        } else if (
            leftTop.classList.contains(letter) &&
            centerCenter.classList.contains(letter) &&
            rightBottom.classList.contains(letter)
        ) {
            table.classList.add("winner");
            displayResult()
            h1.innerHTML = `Winner is ${letter.toUpperCase()}`;
        } else if(count === 9) {
            count = 10;
            displayResult()
            h1.innerHTML = 'Draw';
        }
        else {
            console.log(count)
            return;
        }
    }
}

function displayResult() {
    if(count > 9) {
        h1.style.display = 'block';
        h1.classList.add('red');
    }
    else {
        h1.style.display = 'block';
        h1.classList.add('green');
    }
}