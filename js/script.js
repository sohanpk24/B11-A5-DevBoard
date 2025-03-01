
// random body color change
document.getElementById("colorBtn").addEventListener("click", function () {
    let color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = color;
})