document.getElementById("placeorderAddress").addEventListener("click",data);

var AddressArray = JSON.parse(localStorage.getItem("AddressPageArr"))|| [];
function data(){
    event.preventDefault();
    var object = {
        email:document.getElementById("email").value ,
        name:document.getElementById("name").value ,
        last:document.getElementById("last").value ,
        company:document.getElementById("company").value ,
        tax:document.getElementById("tax").value ,
        add1:document.getElementById("add1").value ,
        add2:document.getElementById("add2").value ,
        country:document.getElementById("country").value ,
        city:document.getElementById("city").value ,
        zip:document.getElementById("zip").value ,
        code : document.getElementById("smallinputforNo").value,
        mob:document.getElementById("mob").value 
        
    }
    AddressArray.push(object);
    localStorage.setItem("AddressPageArr",JSON.stringify(AddressArray));
    window.location.href = "payment.html";
}