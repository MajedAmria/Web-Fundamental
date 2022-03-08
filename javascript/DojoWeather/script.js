function show(){
    alert("loading wether report...");
}
var element1 = document.querySelector("footer");
function ok(element){

element1.remove();
}

function ctof(temp) {
    return Math.round(temp * 1.8 + 32);
}


function ftoc(temp) {
    return Math.round((temp - 32) / 1.8);
}

var temp1 = [document.querySelectorAll("#red")];

for(var i=0;i<temp1.length;i++){
   
    console.log(temp1[0][i].innerHTML);
    }

var temp2 = [document.querySelectorAll("#blue")];
for(var i=0;i<temp2.length;i++){
console.log(temp2);
}


function myFunction(convert){
   
    var temp1 = [document.querySelector("#red")];
    var temp2 = [document.querySelector("#blue")];
    if(convert.value == "C") {
       temp1 [0][0].innerHTML = ftoc(temp1 [0][0].innerHTML);
       temp2 [0][0].innerHTML= ftoc(temp2);
       temp1 [0][1].innerHTML = ftoc(temp1);
       temp2 [0][1].innerHTML= ftoc(temp2);
       temp1 [0][2].innerHTML = ftoc(temp1);
       temp2 [0][2].innerHTML= ftoc(temp2);
       temp1 [0][3].innerHTML = ftoc(temp1);
       temp2 [0][3].innerHTML= ftoc(temp2);
        
    } else {
   
        temp1 [0][0].innerHTML = ctof(temp1[0][0].innerHTML);
        temp1 [0][0].innerHTML = ctof(temp2);
        temp1 [0][1].innerHTML = ctof(temp1);
        temp1 [0][1].innerHTML = ctof(temp2);
        temp1 [0][2].innerHTML= ctof(temp1);
        temp1 [0][2].innerHTML = ctof(temp2);
        temp1 [0][3].innerHTML= ctof(temp1);
        temp1 [0][3].innerHTML = ctof(temp2);
        
    }
   
 
}