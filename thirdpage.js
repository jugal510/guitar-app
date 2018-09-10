var guitarData = JSON.parse(localStorage.getItem("list_item"));
document.getElementById("finalImage").src = guitarData.image_path;
var charge = Number(guitarData.gamount);
console.log(charge);
var shipCharge = Number(guitarData.ship_rate);
var totalCharge = charge + shipCharge;
console.log(totalCharge);
function randomNum(){
    var text = "";
    var arr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    
    for(let i=0; i<10; i++){
        text += arr.charAt(Math.floor(Math.random() * arr.length));
    }
    document.getElementById("random").innerHTML = text;
}
document.getElementById("fn").innerHTML = localStorage.getItem("full_name");
document.getElementById("mail").innerHTML = localStorage.getItem("email_list");
document.getElementById("addr").innerHTML = localStorage.getItem("addr");
document.getElementById("saher").innerHTML = localStorage.getItem("city_list");
document.getElementById("rajay").innerHTML = localStorage.getItem("state_list");
document.getElementById("price").innerHTML = guitarData.price;
document.getElementById("ch").innerHTML = guitarData.shipping_details;
document.getElementById("total").innerHTML = totalCharge;



