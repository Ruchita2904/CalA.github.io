function number(value){
    document.Calcy.result.value += value;
}
function sin(){
    document.Calcy.result.value = Math.sin(document.Calcy.result.value * Math.PI / 180);
}
function cos(){
    document.Calcy.result.value = Math.cos(document.Calcy.result.value * Math.PI / 180);
}
function tan(){
    document.Calcy.result.value = Math.tan(document.Calcy.result.value * Math.PI / 180);
}
function Backspace(){
    var a = document.Calcy.result.value;
    document.Calcy.result.value = a.substr(0, a.length-1);
}
function square(){
    document.Calcy.result.value = Math.pow(document.Calcy.result.value, 2);
}
function qubbed(){
    document.Calcy.result.value = Math.pow(document.Calcy.result.value, 3);
}
function sqrt2(){
    document.Calcy.result.value = Math.pow(document.Calcy.result.value, 1/2);
}
function sqrt3(){
    document.Calcy.result.value = Math.pow(document.Calcy.result.value, 1/3);
}
function remv(){
    document.Calcy.result.value = " ";
}
function equal(){
    document.Calcy.result.value = eval(document.Calcy.result.value);
}
function PI(){
    document.Calcy.result.value = Math.PI;
}