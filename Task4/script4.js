document.getElementById("ColorChangeBtn").addEventListener("click", function() {
changeBackgroundColor();
});

function changeBackgroundColor() {
var r = Math.floor(Math.random() *  256); // Corrected capitalization
var g= Math.floor(Math.random() * 256); // Corrected capitalization
var b= Math.floor(Math.random() * 256); // Corrected capitalization

document.body.style.backgroundColor = "rgb(" + r + "," + g+ "," + b + ")";

}