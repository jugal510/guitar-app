var guitarData = JSON.parse(localStorage.getItem("list_item"));

console.log(guitarData);
document.getElementById("secondImage").src = guitarData.image_path;
document.getElementById("price").innerHTML = guitarData.price;
document.getElementById("productInformation").innerHTML = guitarData.product_description;
document.getElementById("shippingInformation").innerHTML = guitarData.shipping_details;
document.getElementById("review").innerHTML = guitarData.customer_reviews;

checkout.addEventListener("click",reviewDetail);
function reviewDetail(){
    var fullName = document.getElementById("fname").value;
    var email =document.getElementById("email").value;
    var address =document.getElementById("adr").value;
    var city =document.getElementById("city").value;
    var state =document.getElementById("state").value;
    
    document.getElementById("fn").innerHTML = fullName;
    document.getElementById("mail").innerHTML = email;
    document.getElementById("addr").innerHTML = address;
    document.getElementById("saher").innerHTML = city;
    document.getElementById("rajay").innerHTML = state; 
    
    localStorage.setItem("full_name", fullName);
    localStorage.setItem("email_list", email);
    localStorage.setItem("addr", address);
    localStorage.setItem("city_list", city);
    localStorage.setItem("state_list", state);

}
finalButton.addEventListener("click",lastPage);
function lastPage(){
    location.href = "thirdpage.html";
}