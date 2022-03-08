function pizaoven(crustType, sauceType, cheese=[], toppings=[]) {
    var piza={};
    piza.crustType = crustType;
    piza.sauceType = sauceType;
    piza.cheese = cheese;
    piza.toppings = toppings;
    piza.show=function(){
        console.log("show");
    }
    return piza;
}
    
var p1 = pizaoven("deep dish", "traditional","mozzarella", ["pepperoni", "sausage"]);
console.log(p1.show);
