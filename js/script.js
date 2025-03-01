// random body color change
document.getElementById("colorBtn").addEventListener("click", function () {
  let color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = color;
});


// current zone
function updateClock() {
  document.getElementById("clock-zone").innerText = new Date().toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();


// completed button 
const buttons = document.querySelectorAll(".update")
for (const btn of buttons) {
    btn.addEventListener("click", function (event) {
        alert("board updated successful");
        event.target.classList.add("disabled")
        event.target.disabled = true;
    })
}