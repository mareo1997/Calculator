// JavaScript source code
var total = null; //25
var x = [];
var display;
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
        //document.getElementById("x").innerHTML = x;
        display = Number(x.join(''));
        document.getElementById("display").innerHTML = display;
    }else if (total != null) {
        total = null;
        calc = [];
        x.push(num);
       //document.getElementById("x").innerHTML = x;
        display = Number(x.join(''));
        document.getElementById("display").innerHTML = display; 
    } else if(total == null){
        x.push(num);
        //document.getElementById("x").innerHTML = x;
        display = Number(x.join(''));
        document.getElementById("display").innerHTML = display;
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
    //document.getElementById("x").innerHTML = x;
}

function add() {
    if (total != null) {
        calc.push('+');
        //document.getElementById("c").innerHTML = calc;
    } else if (total == null) {
        calc.push(display);
        calc.push('+');
        //document.getElementById("c").innerHTML = calc;
    }
}

function sub() { //problem 0-5
    if (total != null) {
        calc.push('-');
        //document.getElementById("c").innerHTML = calc;
    } else if (total == null) {
        calc.push(display);
        calc.push('-');
        //document.getElementById("c").innerHTML = calc;
        if(isNaN(calc[0])){
            //document.getElementById("c").innerHTML = calc;
        }
    }
}

function mul() {
    if (total != null) {
        calc.push('*');
        //document.getElementById("c").innerHTML = calc;
    } else if (total == null) {
        calc.push(display);
        calc.push('*');
        //document.getElementById("c").innerHTML = calc;
    }
}

function div() {
    if (total != null) {
        calc.push('/');
        //document.getElementById("c").innerHTML = calc;
    } else if (total == null) {
        calc.push(display);
        calc.push('/');
        //document.getElementById("c").innerHTML = calc;
    }
}

function eql() {
    if (calc[1] == null) {
        total = calc[0];
        document.getElementById("display").innerHTML = total;
        calc[0] = total;
        //document.getElementById("c").innerHTML = calc;
    } else if (calc[1] == '+') {
        total = calc[0] + calc[2];
        document.getElementById("display").innerHTML = total;
        calc[0] = total;
        calc.pop();
        calc.pop();
        //document.getElementById("c").innerHTML = calc;
    } else if (calc[1] == '*') {
        total = calc[0] * calc[2];
        document.getElementById("display").innerHTML = total;
        calc[0] = total;
        calc.pop();
        calc.pop();
        //document.getElementById("c").innerHTML = calc;
    } else if (calc[1] == '/') {
        if (calc[2] == 0) {
            clear();
        } else {
            total = calc[0] / calc[2];
        }
        document.getElementById("display").innerHTML = total;
        calc[0] = total;
        calc.pop();
        calc.pop();
        //document.getElementById("c").innerHTML = calc;
    } else if (calc[1] == '-') {
        if(isNaN(calc[0])){
            total = 0 - calc[2];
            document.getElementById("display").innerHTML = total;        
        }else{
            total = calc[0] - calc[2];
            document.getElementById("display").innerHTML = total;
        }
        calc[0] = total;
        calc.pop();
        calc.pop();
        //ocument.getElementById("c").innerHTML = calc;
    }
}

function clear() {
    calc = [];
    x = [];
    total = null;
    document.getElementById("display").innerHTML = "Cleared";
}