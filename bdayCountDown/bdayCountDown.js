var num1 =32;
var num2 =15;
function myFunction(x, id) 
{

    
    if (x === undefined) {
        txt = "x is undefined";
    } else if(x>0) {
        txt = "x is defined: " + x;
    

        for(var i= x; x>0; x--){
            if (x==1){
                txt=="HAPPPYYY Bdayyyy!!!";
                console.log("HAPPPYYY Bdayyyy!!!");
            }else if(x<30){
                txt=="IT is only" + x + "days to your bday :)";
                console.log("IT is only " + x + "days to your bday :)");
                console.log("Value of x:",x)
            }else if (x>30){
                txt=="Too many days: x  to your bday :( ";
                console.log("Too many days:" + x + " to your bday :(");
            
            }
           // console.log("txt: ", txt);
        }//end of for
    }
     //document.getElementById(id).innerHTML = txt;
}

//myFunction(num,unDefined );
myFunction(num1);
myFunction(num2);