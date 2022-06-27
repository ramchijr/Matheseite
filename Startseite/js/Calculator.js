var display = null;
var equation = null;
var value_save = null;
var operation = null;

function load() {
    display = document.getElementById('display');
    equation = document.getElementById('equation');
}

function ce() {
    display.innerHTML = '';
}

function c() {
    display.innerHTML = '';
    equation.innerHTML = '';
    value_save = null;
}

function remove_something() {

}

function number(num) {
    display.innerHTML += num;
}

function dot() {
    var content = display.innerHTML;
    var got_dot = content.indexOf('.');

    if (got_dot == -1) {
        display.innerHTML += '.';
    }
}

function add() {
    if (display.innerHTML) {
        if (value_save == null) {
            value_save = parseFloat(display.innerHTML);
            equation.innerHTML += display.innerHTML + ' + ';
        } else {
            equation.innerHTML = '(' + equation.innerHTML + ') + ';
        }
        display.innerHTML = '';
        operation = 0;
    }
}

function sub() {
    if (display.innerHTML) {
        if (value_save == null) {
            value_save = parseFloat(display.innerHTML);
            equation.innerHTML += display.innerHTML + ' - ';
        } else {
            equation.innerHTML = '(' + equation.innerHTML + ') - ';
        }
        display.innerHTML = '';
        operation = 1;
    }
}

function mult() {
    if (display.innerHTML) {
        if (value_save == null) {
            value_save = parseFloat(display.innerHTML);
            equation.innerHTML += display.innerHTML + ' &times; ';
        } else {
            equation.innerHTML = '(' + equation.innerHTML + ') &times; ';
        }
        display.innerHTML = '';
        operation = 2;
    }
}

function divide() {
    if (display.innerHTML) {
        if (value_save == null) {
            value_save = parseFloat(display.innerHTML);
            equation.innerHTML += display.innerHTML + ' &divide; ';
        } else {
            equation.innerHTML = '(' + equation.innerHTML + ') &divide; ';
        }
        display.innerHTML = '';
        operation = 3;
    }
}


function result() {
    var value2 = null;
    var content = display.innerHTML;
    var result = null;

    if (value_save != null && content) {
        value2 = parseFloat(content);
        equation.innerHTML += value2 + ' = ';

        switch (operation) {
            case 0:
                result = value_save + value2;
                break;
            case 1:
                result = value_save - value2;
                break;
            case 2:
                result = value_save * value2;
                break;
            case 3:
                if (value2 != 0) {
                    result = value_save / value2;
                } else {
                    alert('error');
                }
                break;
        }
        equation.innerHTML += result;
        display.innerHTML = result;
        value_save = result;
    }
}