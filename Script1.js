// JavaScript source code
var total; //25
var x = [];
var display;
var num1; //12
var num2;//13
var calc = [];

function Calculation(click) {
    if (typeof click == 'number') {
        number(click);
    } else if (click == 'clr') {
        clear(click);
    } else {
        math(click);
    }
}

function number(num) {
    if (total != undefined) {
        total = null;
        calc = [];
        x.push(num);
        document.getElementById("x").innerHTML = x;
        display = Number(x.join(''));
        document.getElementById("display").innerHTML = "Display: " + display;
        //document.getElementById("c").innerHTML = "new num";
    } else {
        x.push(num);
        document.getElementById("x").innerHTML = x;
        display = Number(x.join(''));
        document.getElementById("display").innerHTML = "Display: " + display;
    }
}

function math(symbol) {
    calc.push(display);
    if (total != undefined) {
        calc.pop();
        if (symbol == '+') {
            calc.push('+');
            document.getElementById("c").innerHTML = "Calc:" + calc;
        } else if (symbol == '*') {
            calc.push('*');
            document.getElementById("c").innerHTML = "Calc:" + calc;
        }
    } else if (symbol == '=') {
        eql();
    } else {
        if (symbol == '+') {
            calc.push('+');
            document.getElementById("c").innerHTML = "Calc:" + calc;
        }
    } 
    x = [];
    document.getElementById("x").innerHTML = x;
}

function eql() {
    /*if (total != undefined) {
        calc.push(display);
    }*/
    if (calc[1] == '+') {
        total = calc[0] + calc[2];
    }
    document.getElementById("display").innerHTML = total;
    calc[0] = total;
    x = [];
    calc.pop();
    calc.pop();
    document.getElementById("c").innerHTML = "Calc:" + calc;
}
/*
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
}*/

function clear() {
    calc = [];
    x = [];
    total = null;
    document.getElementById("display").innerHTML = "Cleared";
}