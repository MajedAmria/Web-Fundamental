var element1 = document.querySelector("#acc");
var elemnt2 = document.querySelector("#connections");
var username = document.querySelector("#username");
/*console.log(elemnt2.innerText);*/
function accept(element) {
   
   
    var counter1=elemnt2.innerText;
    counter1++;
    elemnt2.innerText=counter1;
    element.remove();
   
}

function ignore(element) {
    var counter=element1.innerText;
    counter--;
    element1.innerText=counter;
    element.remove();
   
}

function edit() {
    username.innerText = "Majed";
}