
    
function myFunction(x) 
{
    var x;
    
    if (x === undefined) {
        txt = "x is undefined";
    } else {
        txt = "x is defined";
    }
    document.getElementById("unDefined").innerHTML = txt;
}


function printNumbers()
{   
    var num1 = "23 ";
    var num2 = "27 ";
    var num3 = "29 ";
    // var txtNumber = console.log("num1: ", num1);
    console.log("num1: ", num1, "num2: ", num2, "num3: ", num3);
    var txtNumber =  "\n"+num1+","+ "\n"+num2+","+"\n"+num3;
    var txtNumber2 =  num1+", "+num2+", "+num3;
    console.log("txtNumber:", txtNumber);
    // console.log("num1:", num1);
    // console.log("num1:", num2);
    // console.log("num1:", num3);
    document.getElementById("numberPrint").innerHTML = txtNumber2;
}


function printStrings()
{
    var string1 ="Hi, how are you? "; 
    var string2 ="My name is Diana.";
    var string3 ="What is your name?";
    
    console.log("String1:", string1);
    console.log("String1:", string2);
    console.log("String1:", string3);
    var stringOutput = string1+string2+string3;
    document.getElementById("stringPrint").innerHTML = stringOutput ;
}



function printBoolean( isABoolean, isNotABoolean)
{
    var xisABoolean = "True";
    var yisNotABoolean = "False";
    
    var booleanOutput = "x boolean has value:"+xisABoolean+"; y boolean has value:"+yisNotABoolean; 
    console.log("isABoolean",isABoolean);
    console.log("isNotABoolean",isNotABoolean);
    document.getElementById("booleanPrint").innerHTML = booleanOutput;
    
}















