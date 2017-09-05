'use strict';

function calculate(symbol) {
    document.getElementById('result').innerHTML = eval(
        parseFloat(document.getElementById('v1').value) + symbol + parseFloat(document.getElementById('v2').value)
    );
}