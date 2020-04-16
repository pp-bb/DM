var electric = document.getElementById("electric");
var water = document.getElementById("water");
var electric_nol = document.getElementById("electric-nol");
var water_nol = document.getElementById("water-nol");
if (electric.textContent >= 5000) {
    electric_nol.className = "not-normal";
    electric_nol.innerHTML = "异常";
} else {
    electric_nol.className = "is-normal";
    electric_nol.innerHTML = "正常";
}
if (water.textContent >= 5000) {
    water_nol.className = "not-normal";
    water_nol.innerHTML = "异常";
} else {
    water_nol.className = "is-normal";
    water_nol.innerHTML = "正常";
}