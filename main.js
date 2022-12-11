// Mission 1
const input = document.createElement('input')
input.placeholder = "Write something"

const showBtn = document.createElement('button')
showBtn.innerText = "Show"

showBtn.addEventListener('click', function(event){
    alert(input.value)
})

document.body.append(input)
document.body.append(showBtn)


// Mission 2 
const positionLabel = document.createElement('label')
positionLabel.style.backgroundColor = "White"
document.body.addEventListener('mousemove', function(event) {
    positionLabel.innerText = event.x + ", " + event.y
})
const space = document.createElement('br')

document.body.append(space)
document.body.append(positionLabel)


// Mission 3
const space2 = document.createElement('br')
const space3 = document.createElement('br')
const input2 = document.createElement('input')
input2.placeholder = "Write image source"

const showBtn2 = document.createElement('button')
showBtn2.innerText = "Show"

const img = document.createElement('img')
img.style.border = 'solid 2px'
img.style.height = '400px'
img.style.width = '500px'

showBtn2.addEventListener('click', function(event){
    img.src = input2.value
})

document.body.append(space2)
document.body.append(input2)
document.body.append(showBtn2)
document.body.append(space3)
document.body.append(img)


// Mission 4
let array = [1, 2.3, "four", true, null]
console.log(array)
const space4 = document.createElement('br')
const removeBtn = document.createElement('button')
removeBtn.innerText = "Remove"
removeBtn.addEventListener('click', function(event){
    array.pop()
    console.log(array)
})

document.body.append(space4)
document.body.append(removeBtn)


// Mission 5
const space5 = document.createElement('br')
const buttons = document.createElement('div')
buttons.addEventListener('click', function(event) {
    document.body.style.backgroundColor = event.srcElement.innerText
})
const blueButton = document.createElement('button')
blueButton.innerText = "Blue"
blueButton.style.backgroundColor = "Blue"

const redButton = document.createElement('button')
redButton.innerText = "Red"
redButton.style.backgroundColor = "Red"

const greenButton = document.createElement('button')
greenButton.innerText = "Green"
greenButton.style.backgroundColor = "Green"

const blackButton = document.createElement('button')
blackButton.innerText = "Black"
blackButton.style.color = "White"
blackButton.style.backgroundColor = "Black"

document.body.append(space5)
document.body.append(buttons)
buttons.appendChild(blueButton)
buttons.appendChild(redButton)
buttons.appendChild(greenButton)
buttons.appendChild(blackButton)


// Mission 6
const colors = ["White", "Pink", "Brown", "yellow", "Purple", "Gray"]
setInterval(function () { 
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * 6)]
}, 2000)