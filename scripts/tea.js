const htmlTag = document.getElementsByTagName('html')[0];
const theme = htmlTag.getAttribute('data-theme');
htmlTag.setAttribute("data-theme", 'light');


const button = document.getElementsByClassName('btn')[1];
// console.log(button.textContent)