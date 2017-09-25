var initial = 0.01;

function rewardTotal(rewardSeed){
    var total=0;
    var x= 1;
    //var initialAmount=rewardSeed;
  for (var index = 1; index <31; index++) {
      
      total  = total +( x * rewardSeed );
      x = x * 2;
  }
  // .01 .02 .04 .08
  console.log("Total on 30th day:", total);
}

rewardTotal(initial);