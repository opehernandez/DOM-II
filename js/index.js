// Your code goes here


let nav = document.querySelector('.nav')

let transButton = document.createElement('button')
transButton.textContent = 'Transform this website!!!'
transButton.style = `
position:absolute;
top:0;
right:0;
height:50px;
width:200px;
font-weight:bold;
font-size:1.2rem;
color:white;
background: red;
text-shadow: 0px 0px 0px transparent;
`
nav.appendChild(transButton)
// transButton.addEventListener('click', transformWeb)

//getters--------------->
let navOuter = document.querySelector('.nav-container')
let navInner = document.querySelector('.nav')
let links = document.querySelectorAll('.nav a')
let busImg = document.querySelector('.intro img')
let introContent = document.querySelectorAll('.intro h2, p')
let body = document.querySelector('body')
let mainContainer = document.querySelector('.home')
let contSection = document.querySelectorAll('.content-section')
let contDestination = document.querySelector('.content-destination')
let contDestinationH2 = document.querySelector('.content-destination h2')
let contDestinationP = document.querySelector('.content-destination p')
let contDestinationImg = document.querySelector('.content-destination img')
//getters END ---------->


//styles----------->
let navStyle =  `
font-size:1.5rem;
text-decoration: none;
text-align:center;
width:100px;
margin: 1.5% 1.5%;
background:#F652A0;
color:#36EEE0;
border-radius:10px;
`

body.style = `padding: 0 3%;background:#36EEE0;`
busImg.style = `
    width:100%;
`
navOuter.style = `
    width:100%;
    display:flex;
`
navInner.style = `
    width:80%;
    display:flex;
    justify-content: space-evenly;
`
for(let i=0; i<links.length; i++) {
    links[i].style = navStyle
    links[i].addEventListener('mouseenter', event => event.target.style = `
    ${navStyle}
    background:#BCECE0;
    color:#F652A0;
    `
    )
    links[i].addEventListener('mouseleave', event => event.target.style = navStyle)
}

mainContainer.style = `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`
for(let i=0; i<contSection.length; i++) {
    contSection[i].style = `
        background: #BCECE0;
        display: flex;
        text-align: center;
        padding: 1%;
        font-size:120%;
        width:45%;
        
    `
}

for(let i=0; i<contSection.length; i++) {
    introContent[i].style = `
        font-size: 140%;
    `
}
contDestination.style = `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`
contDestinationH2.style = `
    text-align: center;
    width:100%;
    font-size: 200%;
`
contDestinationP.style = `
    position: relative;
    width:20%;
    margin:2%;
    font-size:150%;
`
contDestinationImg.style = `
    width:60%;
`














// function transformWeb() {

// }