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




function myFunction(convert){
    var temp = document.querySelectorAll(".main span");

    for(var i=0;i<temp.length;i++){
    if(convert.value == "C") {
        temp[i].innerHTML=ftoc(temp[i].innerHTML);
    } else {
        temp[i].innerHTML= ctof(temp[i].innerHTML);
    }
}
   
 
}


