const keyEvent = document.getElementsByTagName("h2");
const showMain = document.getElementById('mainContainer')
const instructions = document.getElementById('instructions')

const div = document.querySelector('div')

showMain.style.display = 'none'


document.addEventListener("keypress", (e) => {
    showMain.style.display = ''
    instructions.textContent = ''
    // div.classList.remove('show');
    keyEvent[0].textContent = e.which;
    keyEvent[1].textContent = e.key;
    keyEvent[2].textContent = e.which;
    keyEvent[3].textContent = e.code; 

})