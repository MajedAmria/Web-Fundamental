
function remove(element) {
    element.remove();
}
function myFunction(looking){

 
    if(looking.value == "Cat") {
       alert("you are looking for a "+looking.value);
    } else if(looking.value == "Dog") {
        alert("you are looking for a " +looking.value);
    }
}
var paragraph=document.querySelector("#p1");
var conter=3;
function like(){
    conter++;
    paragraph.innerHTML=conter+" pitting(s)";
    
    
}
var paragraph1=document.querySelector("#p2");
var conter1=5;
function like1(){
    conter1++;
    paragraph1.innerHTML=conter1+" pitting(s)";
    
    
}
var paragraph2=document.querySelector("#p3");
var conter2=8;
function like2(){
    conter2++;
    paragraph2.innerHTML=conter2+" pitting(s)";
    
    
}