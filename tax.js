'use strict';

var $ = function(id) {
    return document.getElementById(id);

};
var calculateTotal = function(sales, tax) {
  var total = (sales / tax);
  total = total.toFixed(2);
  return total;
};
var processEntries = function() {
    var sales = parseFloat($("sales").value);
    var tax = parseFloat($("tax").value);

    if (isNaN(sales) || isNaN(tax)) {
        alert("Both entries must be numeric");
    } else if (sales <= 0 || tax <= 0) {
        alert("Both entries must be greater than zero");
    } else {
        $("total").value = calculateTotal(sales,tax);
        $("sales").focus();
    }
};
window.onload = function() {
    $("calculate").onclick = processEntries;
};


































