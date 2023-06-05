const moveUp = document.getElementById('moveUpBtn');
const moveDown = document.getElementById('moveDownBtn');
const selectFloor = document.getElementById('selectFloor');
const goBtn = document.getElementById('goBtn');
const floor = document.getElementById('floor');
const lift = document.getElementById('lift');

let toFloor = 0;
let onMotion = false;
let motion = null;

document.addEventListener('DOMContentLoaded',() => {
   onMotion = true;
    motion = setInterval (AnimateUp, 50)
});