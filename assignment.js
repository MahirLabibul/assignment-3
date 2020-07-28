// Converting feet to mile
function feetToMile(feet) {
    var mile = feet * 0.000189394;
    if(feet < 0){
        mile = "The value of feet cannot be negative.";
    }
    return mile;    
}
// var example = feetToMile(-65);
// console.log(example);



// Counting the amount of wood needed
function woodCalculator(chair, table, bed){
    var numOfChair = chair * 1;
    var numOfTable = table * 3;
    var numOfBed = bed * 5;
    var amountOfWood = numOfChair + numOfTable + numOfBed;
    return amountOfWood;
}
// var example2 = woodCalculator(5, 6, 10);
// console.log(example2);




// Calculating the number of bricks needed
function brickCalculator(floor){
    var bricks = 0;
    if(floor <= 10){
        var beforeEleven = floor * 15000;
        bricks = beforeEleven;
    }
    else if(floor <= 20 && floor > 10){
        var betweenTenAndTwenty = 150000 + (floor - 10) * 12000;
        bricks = betweenTenAndTwenty; 
    }
    else{
        var afterTwenty = 150000 + 120000 + (floor - 20) * 10000;
        bricks = afterTwenty;
    }
    return bricks;
}
// var example3 = brickCalculator(50);
// console.log(example3);




//The name of the friend who has the smallest name
function tinyFriend(name){
    largest = name[0];
    for(var i = 0; i < name.length; i++){
        var currentName = largest[i];
        if(largest.length < currentName.length){
            largest = currentName;
        }
    }
    return largest;
}
;