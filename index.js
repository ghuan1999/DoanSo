"use strict";
exports.__esModule = true;
var x = 0;
var dem = 0;
var diem = 0;
function reset() {
    var noti = document.getElementById("count");
    var result = document.getElementById("result");
    var button = document.getElementById("btn-guess");
    var reset = document.getElementById("btn-reset");
    button.style.display = "inline-block";
    reset.style.display = "none";
    x = Math.floor(Math.random() * 101);
    console.log(x);
    dem = 3;
    noti.innerHTML = String(dem);
    result.innerHTML = "";
}
function check() {
    dem--;
    var noti = document.getElementById("count");
    var input = document.getElementById("number");
    var y = Number(input.value);
    var result = document.getElementById("result");
    switch (dem) {
        case 0:
            diem = 30;
            break;
        case 1:
            diem = 50;
            break;
        case 2:
            diem = 100;
            break;
    }
    if (dem <= 0 && y != x) {
        result.innerHTML = "Game over mat roi :D";
        var button = document.getElementById("btn-guess");
        var reset_1 = document.getElementById("btn-reset");
        button.style.display = "none";
        reset_1.style.display = "inline-block";
    }
    else if (dem >= 0) {
        if (y == x) {
            result.innerHTML = "Win " + diem + " điểm";
            var button = document.getElementById("btn-guess");
            var reset_2 = document.getElementById("btn-reset");
            button.style.display = "none";
            reset_2.style.display = "inline-block";
        }
        else {
            if (y < x)
                result.innerHTML = "Số nhỏ quá";
            if (y > x)
                result.innerHTML = "Số lớn quá";
        }
    }
    console.log(dem);
    if (dem >= 0)
        noti.innerHTML = String(dem);
}
