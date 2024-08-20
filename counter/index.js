const increaseBtn = document.getElementById("incrementBtn");
const decreaseBtn = document.getElementById("decrementBtn");
const resetBtn = document.getElementById("resetBtn");
let countLabel = document.getElementById("countlabel")
let count = 0;
increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count
}
decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count
}
resetBtn.onclick = function(){
    count=0;
    countLabel.textContent = count
}