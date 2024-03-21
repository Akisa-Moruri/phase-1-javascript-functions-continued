// code your solution here
function saturdayFun(activity = "roller-skate" ){
    return("This Saturday, I want to ${activity}!");
}
saturdayFun();

// no arguements are passed
function saturdayFun(activity = "roller-skate" ){
    return(`This Saturday, I want to ${activity}!`);
}


//no arguements are passed
function mondayWork(activity = "go to the office" ){
    return(`This Monday, I will ${activity}.`);
}

function wrapAdjective(symbol ='*') {
    return function(adjective) {
    return `You are ${symbol}${adjective}${symbol}!`;
      }
}