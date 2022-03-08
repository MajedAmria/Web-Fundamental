function show(){
    alert("loading wether report...");
}
var element1 = document.querySelector("footer");
function ok(element){

element1.remove();
}

function ctof(temp) {
   
    return  parseInt(Math.round(temp * 1.8 + 32)) ;
}


function ftoc(temp) {
    return parseInt(Math.round((temp - 32) / 1.8));
}

/*var temp1 = [document.querySelectorAll("#red")];

for(var i=0;i<temp1.length;i++){
   
    console.log(temp1[0][i].innerHTML);
    }
*/


function myFunction(convert){
   
    var temp1 = document.querySelectorAll("#red");
   
    var temp2 = document.querySelectorAll("#blue");
    
    if(convert.value == "C") {
        temp1[0].innerHTML=ftoc(temp1[0].innerHTML);
        temp2[0].innerHTML=ftoc(temp2[0].innerHTML);
        temp1[1].innerHTML=ftoc(temp1[1].innerHTML);
        temp2[1].innerHTML=ftoc(temp2[1].innerHTML);
        temp1[2].innerHTML=ftoc(temp1[2].innerHTML);
        temp2[2].innerHTML=ftoc(temp2[2].innerHTML);
        temp1[3].innerHTML=ftoc(temp1[3].innerHTML);
        temp2[3].innerHTML=ftoc(temp2[3].innerHTML);
    
    } else {
   
        temp1[0].innerHTML= ctof(temp1[0].innerHTML);
        temp2[0].innerHTML=ctof(temp2[0].innerHTML);
        temp1[1].innerHTML=ctof(temp1[1].innerHTML);
        temp2[1].innerHTML=ctof(temp2[1].innerHTML);
        temp1[2].innerHTML=ctof(temp1[2].innerHTML);
        temp2[2].innerHTML=ctof(temp2[2].innerHTML);
        temp1[3].innerHTML=ctof(temp1[3].innerHTML);
        temp2[3].innerHTML=ctof(temp2[3].innerHTML);
    }
   
 
}


var temps = document.querySelectorAll("main div span");
console.log(temps);