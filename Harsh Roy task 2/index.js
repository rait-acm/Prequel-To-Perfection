var exp = '', number , decimal , equal , operator = true;
var textview = document.forms['myForm'] ['textview'];
function insertNum(number) {
    if (equal) {
        exp = number;
        textview.value = exp;
        number = true ;
        equal = false ;
    }
    else {
        exp = textview.value + number ;
        textview.value = exp ;
        number = true;
    }
    if (operator) decimal = false;
}
function insertOp(op){
    textview.value = exp + op;
    operator = true;
    equal = false;

}
function insertDec() {
    if (number && !decimal){
        textview.value = exp + '.';
        decimal = true;
        operator = false;
    }
}
 function equalTo(){
     if (exp) {
         exp = eval(exp);
         textview.value = exp;
         equal = true;
         decimal = false;
         number = false;
     }
 }
function clear_scr(){
    exp = 0;
    exp = textview.value;
    decimal = false;
    exp = exp.substring(exp.length);
    textview.value = exp; 

}
function back(){
    exp = textview.value;
    console.log(exp);
    exp = exp.substring(0,exp.length - 1);
    console.log("bonmmmfoirjudcuh");
    console.log(exp);
    textview.value = exp; 
}