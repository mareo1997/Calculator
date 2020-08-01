// JavaScript source code
var total; //25
var x = [];
var display;
var num1; //12
var num2;//13
var calc = [];

function number(clicked) {
    if (typeof clicked == 'number') {
        x.push(clicked);
        document.getElementById("x").innerHTML = x;
        display = Number(x.join(''));
        document.getElementById("display").innerHTML = display;
    } else if (clicked == 'add') {
        add();
    } else if (clicked == 'mul') {
        mul();
    } else if (clicked == 'sub') {
        if (calc[0] == undefined) {
            calc.push(display);
            calc.push('-');
            document.getElementById("c").innerHTML = calc;
        } else {
            calc.push('-');
            document.getElementById("c").innerHTML = calc;
        }
        x = [];
    } else if (clicked == 'eql') {
        eql();
    } else if (clicked == 'clr'){
        clear();
    }
}

function add() {
    if (calc[0] == undefined) {
        calc.push(display);
        calc.push('+');
        document.getElementById("c").innerHTML = calc;
    } else {
        calc.push('+');
        document.getElementById("c").innerHTML = calc;
    }
    x = [];
}

function mul() {
    if (calc[0] == undefined) {
        calc.push(display);
        calc.push('*');
        document.getElementById("c").innerHTML = calc;
    } else {
        calc.push('*');
        document.getElementById("c").innerHTML = calc;
    }
    x = [];
}

function eql() {
    calc.push(display);
    if (calc[1] == '+') {
        total = calc[0] + calc[2];
    } else if (calc[1] == '*') {
        total = calc[0] * calc[2];
    } else if (calc[1] == '-') {
        total = calc[0] - calc[2];
    }
    document.getElementById("display").innerHTML = total;
    calc[0] = total;
    x = [];
    calc.pop();
    calc.pop();
    document.getElementById("c").innerHTML = calc;
}

function clear() {
    calc = [];
    x = [];
    document.getElementById("display").innerHTML = "Cleared";
}