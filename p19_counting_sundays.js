// Project Euler: Problem 19: Counting Sundays
function leapyear(n){
    if(n%4===0||n%400===0&&n%100!==0){
        return 1;
    }
    else{
        return 0;
    }
}
function first_Day_of_the_year(start) {
  var StartDayoftheyear = 1 //1901 stating day monday
  for(var i = 1901 ;i<=start;i++){
     var checkleap = leapyear(i); 
     if(checkleap===1){
         StartDayoftheyear = 2+(StartDayoftheyear%7);
     }
     else{
         StartDayoftheyear = 1 + (StartDayoftheyear%7);
     }
  }
  //console.log(StartDayoftheyear);
  return StartDayoftheyear;
}
//first_Day_of_the_year(1943)

function countingSundays(Startyear,endYear){
 var currentDay = first_Day_of_the_year(Startyear);
 var daysinmonth = [31,28,31,30,31,30,31,31,30,31,30,31];
 var sundaycount = 0;
 
 for (var year = Startyear; year <= endYear; year++) {
    for (var month = 0; month < 12; month++) {
    if (currentDay === 0) {
        sundaycount++;
    }
    var checkleap;
    checkleap = leapyear(year);
    if(month === 1 && checkleap ===1){
        currentDay++;
    }
    currentDay = (currentDay + daysinmonth[month]) % 7;
}
}
console.log(sundaycount);
return sundaycount;
}

countingSundays(1995, 2000);