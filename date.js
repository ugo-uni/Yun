const startDate = new Date("2025-05-22 00:00:00");
const today = new Date();
const date = document.querySelector('.date');

let difTime = today.getTime() - startDate.getTime();
console.log(difTime / (1000*60*60*24));
let difDay = Math.ceil(difTime / (1000*60*60*24));

date.innerText = difDay;