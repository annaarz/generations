let settingsBtn = document.querySelector('.eye');
let footBtn = document.querySelector('.eyef');
let settingPanel = document.querySelector('.settings');


settingsBtn.addEventListener('click',() => {
    settingPanel.classList.toggle('visible');
})
footBtn.addEventListener('click',() => {
    settingPanel.classList.toggle('visible');
})




let inverse = document.querySelector('.inverse');
let standart = document.querySelector('.standart');

standart.addEventListener('click',() => {
    document.body.classList.remove('dark');
    inverse.classList.remove('active');
    standart.classList.add('active');
    inverse.classList.remove('unactive');
})

inverse.addEventListener('click',() => {
    document.body.classList.add('dark');
    inverse.classList.remove('unactive');
    inverse.classList.add('active');
    standart.classList.remove('active');
})



let recomend = document.querySelector('.recomend');
let big = document.querySelector('.big');
let small = document.querySelector('.small');

recomend.addEventListener('click',() => {
    document.body.classList.remove('big');
    big.classList.remove('active');
    recomend.classList.add('active');
    big.classList.remove('unactive');
    small.classList.remove('active');
})

big.addEventListener('click',() => {
    document.body.classList.add('big');
    big.classList.remove('unactive');
    big.classList.add('active');
    recomend.classList.remove('active');
    small.classList.remove('active');
})

small.addEventListener('click',() => {
    document.body.classList.add('big');
    small.classList.remove('unactive');
    small.classList.add('active');
    recomend.classList.remove('active');
    big.classList.remove('active');
})





let advise = document.querySelector('.advise');
let bigger = document.querySelector('.bigger');
let smaller = document.querySelector('.smaller');

advise.addEventListener('click',() => {
    document.body.classList.remove('big');
    bigger.classList.remove('active');
    advise.classList.add('active');
    bigger.classList.remove('unactive');
    smaller.classList.remove('active');
})

bigger.addEventListener('click',() => {
    document.body.classList.add('big');
    bigger.classList.remove('unactive');
    bigger.classList.add('active');
    advise.classList.remove('active');
    smaller.classList.remove('active');
})

smaller.addEventListener('click',() => {
    document.body.classList.add('big');
    smaller.classList.remove('unactive');
    smaller.classList.add('active');
    advise.classList.remove('active');
    bigger.classList.remove('active');
})





let withSerifs = document.querySelector('.withSerifs');
let withoutSerifs = document.querySelector('.withoutSerifs');

withoutSerifs.addEventListener('click',() => {
    document.body.classList.remove('serifs');
    withSerifs.classList.remove('active');
    withoutSerifs.classList.add('active');
    withSerifs.classList.remove('unactive');
})

withSerifs.addEventListener('click',() => {
    document.body.classList.add('serifs');
    withSerifs.classList.remove('unactive');
    withSerifs.classList.add('active');
    withoutSerifs.classList.remove('active');
})