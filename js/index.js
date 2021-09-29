// Your code goes here



let nav = document.querySelector('.nav')
document.addEventListener('keydown', (event) => event.key === 'Escape' ? exitDiv.remove() : null)
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
transButton.addEventListener('click', transformWeb)


function transformWeb() {


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
let contPick = document.querySelector('.content-pick')
let contPickIn = document.querySelectorAll('.content-pick .destination')
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
let buttonStyle = `
width: 30%;
height:50px;
background: #BCECE0;
border: 1px solid red;
margin-top:3%;
margin-left:35%;

`

body.style = `padding: 0 3%;background:#36EEE0;`
busImg.style = `
    width:100%;
`
let hasShown = false;
function createDiv() {
    let exitDiv = document.createElement('div')
    exitDiv.style = `
    position:absolute;
    top:30%;
    left:20%;
    width:60%;
    height:400px;
    background: #BCECE0;
    border-radius:10px;
    `
    let innerDiv = document.createElement('p')
    innerDiv.textContent = 'We are sorry to see you leave, before you go, whould you like to check out our vacation discounts?. Double click to continue'
    innerDiv.style = `
    margin: auto;
    margin-top:2%;
    text-align: center;
    position:relative;
    width:40%;
    height:300px;
    background: #36EEE0;
    font-size: 2rem;
    `
    
    let confirmButton = document.createElement('div')
    confirmButton.style = `
    ${buttonStyle}
    `
    confirmButton.textContent = "YES"
    let cancelButton = document.createElement('div')
    cancelButton.style = `
    ${buttonStyle}
    margin-left:35%;
    `
    confirmButton.addEventListener('dblclick', () => {
        innerDiv.remove()
        startBus(exitDiv)
    })
    cancelButton.addEventListener('dblclick', () => {
        exitDiv.remove()
        
    })

    cancelButton.textContent = "NO"
    body.appendChild(exitDiv)
    exitDiv.appendChild(innerDiv)
    innerDiv.appendChild(confirmButton)
    innerDiv.appendChild(cancelButton)
    hasShown = true;
    document.addEventListener('keydown', (event) => event.key ==='Escape'? exitDiv.remove():null)
}
body.addEventListener('mouseleave', () => {
    if(hasShown) {
        return
    }
    else {
        createDiv()
    }

})



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
    background: #BCECE0;
    margin: 2%;
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
    margin:1%;
    `
    contPick.style = `
    display:flex;
    justify-content: space-evenly;
    margin:1%;
    `

    for(let i=0; i<contPickIn.length; i++) {
    contPickIn[i].style = `
    width: 30%;
    background: #BCECE0;
    padding: 1%;
    `
    }

    function startBus(div) {
        let offers = document.createElement('p')
        let disclaimer = document.createElement('p')
        let busBody = document.createElement('div')
        let busBackWheel = document.createElement('div')
        let busFrontWheel = document.createElement('div')
        let busHood = document.createElement('div')
        let busFrontWindow = document.createElement('div')
        
        offers.textContent = `We are loading your offers...`
        disclaimer.textContent = `tried to animate the bus but its inpractical without @keyframes(esc to exit)`
        offers.style = `
        position:relative;
        top:40%;
        left:30%;
        font-size: 2rem;
        `
        disclaimer.style = `
        position:relative;
        top:40%;
        left:25%;
        font-size: 1.2rem;
        `
        busBody.style = `
        max-width:100%;
        position:relative;
        width:300px;
        height:100px;
        background: black;
        left:30%;
        top:15%;
        border-radius: 15px 50px 0px 0px;
        ` 
        busHood.style = `
        position:relative;
        top:50px;
        width:40px;
        height:50px;
        background: black;
        left: 300px;
        border-radius: 0px 5px 0px 0px;
        `
        busFrontWheel.style = `
        position: relative;
        top:25px;
        left:280px;
        width:50px;
        height:50px;
        background:black;
        border-radius:50%;
        `
        busBackWheel.style = `
        position: relative;
        top:-25px;
        left:20px;
        width:50px;
        height:50px;
        background:black;
        border-radius:50%;
        `
        busFrontWindow.style = `
        position: relative;
        top:-140px;
        left:250px;
        width:40px;
        height:40px;
        background: #BCECE0;
        border-radius: 0px 50px 0px 0px;
        `
        div.append(busBody, offers, disclaimer)
        busBody.append(busHood, busFrontWheel, busBackWheel, busFrontWindow)
    
    }
    
}