/*var current = 0;
function imageGallery(element, value){
    var gallery = ['main.jpg', 'product1.jpg', 'product2.jpg', 'product3.jpg'];
    
    if(value == 'prev'){
        current == 0 ? current = 3 : current = current - 1;
        element.src = gallery[current];
       // console.log(current+'  prev  '+gallery[current]);
    }else if (value == 'next') {
        current == 3 ? current = 0 : current = current + 1;
        element.src = gallery[current];
       // console.log(current+'  next  '+gallery[current]);
    }
}*/
//var next = document.getElementById("next");
//var prev = document.getElementById("prev");


    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "guitardata.json", true);
    xhttp.onload = function(){
        var count = 0;
       
            var myData = JSON.parse(xhttp.responseText);
 
            document.getElementById("productImage").src = myData.allProducts[0].image_path;
            document.getElementById("productInfo").innerHTML = myData.allProducts[0].product_description;
            document.getElementById("shippingInfo").innerHTML = myData.allProducts[0].shipping_details;
            document.getElementById("reviews").innerHTML = myData.allProducts[0].customer_reviews;
            document.getElementById("price").innerHTML = myData.allProducts[0].price;
            document.getElementById("instock").innerHTML = myData.allProducts[0].no_of_items;
        
        
        
        next.addEventListener("click", function(){
            if (count == 3){
                count = 0;
                showImage(count)}
            else{
                count++;
                showImage(count);
            }
        })
        prev.addEventListener("click", function(){
            if(count == 0){
                count = 3;
                showImage(count);
            }
            else{
                count--;
                showImage(count);
            }
        });
        function showImage(count){
            localStorage.setItem('list_item', JSON.stringify(myData.allProducts[count]));
            console.log(localStorage);
            document.getElementById("productImage").src = myData.allProducts[count].image_path;
            document.getElementById("productInfo").innerHTML = myData.allProducts[count].product_description;
            document.getElementById("shippingInfo").innerHTML = myData.allProducts[count].shipping_details;
            document.getElementById("reviews").innerHTML = myData.allProducts[count].customer_reviews;
            document.getElementById("price").innerHTML = myData.allProducts[count].price;
            document.getElementById("instock").innerHTML = myData.allProducts[count].no_of_items;
            document.getElementById("pricy").innerHTML = myData.allProducts[count].ship_rate;
            document.getElementById("charger").innerHTML = myData.allProducts[count].gamount;
            
            
        }
        
    };
    
    xhttp.send();


