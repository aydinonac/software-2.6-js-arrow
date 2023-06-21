var num1 = document.getElementById("inp1");
var num2 = document.getElementById("inp2");
var num3 = document.getElementById("inp3");

function reset () {
  document.getElementById("warn").innerHTML = "";
} 

function numbersCheck() {
  reset();
  if (isNaN(num1.value) || isNaN(num2.value) || isNaN(num3.value) || (num1.value == 0)) {
    document.getElementById("warn").innerHTML = "Your inputs must be integers or decimal numbers and 'a' cannot be 0. Please try again.";
    } 
  else {
    var a = Number(num1.value);
    var b = Number(num2.value);
    var c = Number(num3.value);
    quad(a, b, c);
  }
}

quad = (a,b,c) => {
   var sb = sign(b);
   var sc = sign(c);
   equation(a,b,c,sb,sc);
   var discrim = (b*b) - (4*a*c);
   var re = (-b)/(2*a);
   var sqrtDis = Math.sqrt(Math.abs(discrim));
   if (discrim > 0) {
        let text = "";
        im = sqrtDis/(2*a);
        posroot = re + im;
        negroot = re - im;
        root1 = Math.round((posroot + Number.EPSILON)*100)/100
        root2 = Math.round((negroot + Number.EPSILON)*100)/100
        text = ("The 2 real roots are: " + root1 + " and " + root2);
        document.getElementById("roots").innerHTML = text;
   } else if (discrim == 0) {
        let text = "";
        root = Math.round((re + Number.EPSILON)*100)/100;
        text = ("The real roots are both equal to: " + root);
        document.getElementById("roots").innerHTML = text;
     } 
     else {
        let text = "";
        re = (Math.round((re + Number.EPSILON)*100)/100).toString()
        im = (Math.round(((sqrtDis/(2*Math.abs(a))) + Number.EPSILON)*100)/100).toString();
        text = ("The 2 complex roots are: " + re + " +/- " + im + "i");
        document.getElementById("roots").innerHTML = text;
     }
}
sign = (x) => {
    if (x > 0) {sgn = "+"}
    else if (x == 0){sgn = ""}
    else {sgn = "-"}
    return (sgn)
    }
equation = (a,b,c,sb,sc) => {
    let text = "";
    aPr = a; bPr = b; cPr = c;
    if (a == 1) {aPr = ""}
    if (a == -1) {aPr = "-"}
    if ((b == 1) || (b == -1)){
         text = (aPr + "x^2 " + sb + " " + "x " + sc + " " + Math.abs(c) + " = " + 0);
         document.getElementById("eqn").innerHTML = text;
    } else if ((b == 0) && (c != 0)) {
         text = (aPr + "x^2 " + sc + " " + Math.abs(c) + " = " + 0);
         document.getElementById("eqn").innerHTML = text;
    } else if ((b != 0) && (c == 0)) {
         text = (aPr + "x^2 " + sb + " " + Math.abs(b) + " x" + " = " + 0);
         document.getElementById("eqn").innerHTML = text;
    } else if ((b == 0) && (c == 0)) {
         text = (aPr + "x^2 " + " = " + 0);
         document.getElementById("eqn").innerHTML = text;
    } else {
        text = (aPr + "x^2 " + sb + " " + Math.abs(b) + "x " + sc + " " + Math.abs(c) + " = " + 0);
        document.getElementById("eqn").innerHTML = text;
    }
}