var displayDiv = document.querySelector("#display");
function press(num){
displayDiv.innerText+=num.innerText;

}
function setOP(op){
    displayDiv.innerText+=op.innerText;
 
}
function calculate(){
 
    displayDiv.innerText = eval(displayDiv.innerText);
}
function clr(){
    displayDiv.innerText=0;
}