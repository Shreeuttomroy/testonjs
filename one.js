function calc(value, fromUnit, toUnit){
if(fromUnit == "kilometer"){
    res = 1000 * value;
}else if(fromUnit == "kilogram"){
    res = 1000 * value;
}else if(fromUnit == "foot"){
    res = 12 * value;
}else if(fromUnit == "celciuse"){
    res = 32 + ( value * 9 / 5);
}else{
    res = "invalid";
}
console.log(value + " " + fromUnit + " = " + res + " " + toUnit);
}
calc(50, "kilometer", "meter");
calc(50, "kilogram", "gram");
calc(50, "foot", "inchi");
calc(50, "celciuse", "farenhit")