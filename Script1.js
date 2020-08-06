// JavaScript source code
var total = null; //25
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
    if (total != null && (calc[1] == '+' || calc[1] == '*' || calc[1] == '/' || calc[1] == '-')) {
        x.push(num);
        document.getElementById("x").innerHTML = x;
        display = Number(x.join(''));
        document.getElementById("display").innerHTML = "3 Display: " + display;
    }else if (total != null) {
        total = null;
        calc = [];
        x.push(num);
        document.getElementById("x").innerHTML = x;
        display = Number(x.join(''));
        document.getElementById("display").innerHTML = "1 Display: " + display; 
    } else if(total == null){
        x.push(num);
        document.getElementById("x").innerHTML = x;
        display = Number(x.join(''));
        document.getElementById("display").innerHTML = "2 Display: " + display;
    }
}

function math(symbol) {
    if (symbol == '+') {
        add();
    } else if (symbol == '*') {
        mul();
    } else if (symbol == '/') {
        div();
    } else if (symbol == '-') {
        sub();
    } else if (symbol == '=') {
        calc.push(display);
        eql();
    }
    x = [];
    document.getElementById("x").innerHTML = x;
}

function add() {
    if (total != null) {
        calc.push('+');
        document.getElementById("c").innerHTML = "1 Add: " + calc;
    } else if (total == null) {
        calc.push(display);
        calc.push('+');
        document.getElementById("c").innerHTML = "2 Add: " + calc;
    }
}

function sub() { //problem 0-5
    if (total != null) {
        calc.pop();
        calc.push('-');
        document.getElementById("c").innerHTML = "1 Sub: " + calc;
    } else if (total == null) {
        calc.push(display);
        calc.push('-');
        document.getElementById("c").innerHTML = "2 Sub: " + calc;
    }
}

function mul() {
    if (total != null) {
        calc.push('*');
        document.getElementById("c").innerHTML = "1 Mul: " + calc;
    } else if (total == null) {
        calc.push(display);
        calc.push('*');
        document.getElementById("c").innerHTML = "2 Mul: " + calc;
    }
}

function div() {
    if (total != null) {
        calc.push('/');
        document.getElementById("c").innerHTML = "1 Div: " + calc;
    } else if (total == null) {
        calc.push(display);
        calc.push('/');
        document.getElementById("c").innerHTML = "2 Div: " + calc;
    }
}

function eql() {
    if (calc[1] == '+') {
        total = calc[0] + calc[2];
    } else if (calc[1] == '*') {
        total = calc[0] * calc[2];
    } else if (calc[1] == '/') {
        if (calc[2] == 0) {
            clear();
        } else {
            total = calc[0] / calc[2];
        }
    } else if (calc[1] == '-') {
        total = calc[0] - calc[2];
    } else if (calc[0] == '-') {
        total = 0 - calc[1];
    }
    document.getElementById("display").innerHTML = "Total = " + total;
    calc[0] = total;
    calc.pop();
    calc.pop();
    document.getElementById("c").innerHTML = "Calc: " + calc;
}

function clear() {
    calc = [];
    x = [];
    total = null;
    document.getElementById("display").innerHTML = "Cleared";
}