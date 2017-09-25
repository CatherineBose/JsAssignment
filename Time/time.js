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
    var minOutput;
    var periodOutput;
    var time = minOutput+hourValue+periodOutput;

    if(minuteValue<31)
    {
        minOutput="It's just after";
        console.log("It's just after"+  hourValue +"in the evening");
    }
    else if (minuteValue>31)
    {
        minOutput="It's almost";
        console.log("It's almost"+ 9+ "in the morning");
    }

    if(periodValue ==="AM"){
      periodOutput="in the morning";
    } else if(periodValue ==="PM"){
        periodOutput="in the evening";
    }

    console.log(time);
}

tellTime(8,50,"AM");
tellTime(hourValue1,minuteValue1,periodValue1);
tellTime(hourValue2,minuteValue2,periodValue2);

