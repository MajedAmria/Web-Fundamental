/*function alwaysHungry(arr) {
    var counter=0;
    for(var i=0;i<arr.length;i++){
         if(arr[i]=="food"){
             counter++;
         }
      
    }for(var j=1;j<=counter;j++){
        console.log ("yummy");
    }
        if(counter==0){
            console.log("I'm hungry");
        }
      
        
    
   
}
   
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"
*/
/*
function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var i=0;i<arr.length;i++){
      if(arr[i]>cutoff){
      filteredArr.push(arr[i]);
    
    }
    }
    return filteredArr;
}

console.log(highPass([6, 8, 3, 10, -2, 5, 9], 5));*/
/*
function betterThanAverage(arr) {
    var sum = 0;
    var avg=0;
    for(var i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    avg=sum/arr.length;
    
    var count = 0;
    for(var i=0;i<arr.length;i++){
       if(arr[i]>avg){
       count++;
       }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4
*/ 
/*
function reverse(arr) {
  var newarr=[];
    for(var i=arr.length-1;i>=0;i--){
     newarr.push(arr[i]);
    }
    return newarr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]
*/
/*
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for(var i=2;i<n;i++){
      fibArr[i]=fibArr[i-2]+fibArr[i-1];     
      }
   return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
*/