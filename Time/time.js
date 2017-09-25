var hourValue1 = 8;
var minuteValue1 = 50;
var periodValue1 = "AM";


var hourValue2 = 7;
var minuteValue2 = 15;
var periodValue2 = "PM";


function tellTime(hourValue, minuteValue, periodValue){
    var hourValue = hourValue;
    var minuteValue = minuteValue;
    var periodValue = periodValue;
    var minOutput="";
    var periodOutput="";
    // var time="no result";
   
    console.log("hour min period:",hourValue, minuteValue, periodValue);
    if(minuteValue<31)
    {
        minOutput="It's just after ";
        console.log("minop:",minOutput);
        console.log("hourValue:", hourValue);
        //  time = "Greetings:"+minOutput+""+hourValue+""+periodOutput;
        //  console.log(time);
    }
    if (minuteValue>31)
    {
        hourValue++;
        minOutput="It's almost ";
        console.log("minop:",minOutput);
        console.log("hourValue:", hourValue);
        //time = "Greetings:"+minOutput+""+hourValue+""+periodOutput;
        // console.log(time);
       
    }

    if(periodValue ==="AM"){
      periodOutput="in the morning";
      console.log("periodOp:", periodOutput);
    //   time = "Greetings:"+minOutput+""+hourValue+""+periodOutput;
    //   console.log(time);
    //   console.log("TIME:",time);
    } else if(periodValue ==="PM"){
        periodOutput="in the evening";
        console.log("periodOp:", periodOutput);
        // time = "Greetings:"+minOutput+""+hourValue+""+periodOutput;
        // console.log(time);
        // console.log("TIME:",time);
    }

    var time = "Greetings:"+minOutput+" "+hourValue+" "+periodOutput;
    console.log("TIME:",time);
    document.getElementById("Result").innerHTML= time;
    console.log("TIME:",time);
}

 tellTime(8,50,"AM");
 tellTime(8,15,"AM");


// tellTime(hourValue1,minuteValue1,periodValue1);
// document.getElementById("time1").innerHTML = time;
// tellTime(hourValue2,minuteValue2,periodValue2);

