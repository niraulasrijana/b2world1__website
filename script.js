// B2World website javascript
// welcome message
console.log("welcome to b2world website");

// show welcome alert when
pageloads
window.onload=fuction(){
    console.log("page loaded sucessfully")
};
// contact form
const form=
document.querySelector("form");

if(form){
form.addEventListener("submit", function(event){
    event.preventDefault();
    alert("Thank! your message has been sent sucessfully.");
    form.reset();
});
}
// button hover effect
const buttons=document.querySelectorAll("button");

buttons.forEach((button){
    button.addEventListener("mouseover",function(){
        button.style.backgroundColor="#0056b3";
    });
    button.addEventListener("mouseout",function(){
        button.style.backgroundColor="#0056b3";
    });
});
// navigation links
const links= document.querySelectorAll("nav a");

links.forEach(function(link){
    link.addEventListener("click",function(){
        console.logo("opening:"+link.textContent);
    });
});