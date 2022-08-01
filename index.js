let countYo = document.getElementById("countdown")
console.log(countYo)

let saveEl = document.getElementById('save-el')


let count = 0

function clicky() {
    count = count + 1
    countYo.textContent = count
}

function save () {
    let countStr = count + ' - '

    saveEl.textContent += countStr
    count = 0
    countYo.textContent = 0
    console.log(count);
}





