var btnCS = document.getElementById("btn-CS");
var btnCD = document.getElementById("btn-CD");
var SNum = document.getElementsByClassName("chart-SNum");
var DNum = document.getElementsByClassName("chart-DNum");
btnCS.onclick = function () {
    SNum[0].style.display='block';
    DNum[0].style.display='none';
};

btnCD.onclick = function () {
    DNum[0].style.display='block';
    SNum[0].style.display='none';
};