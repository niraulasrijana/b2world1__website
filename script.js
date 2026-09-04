// Welcome Alert
window. onloaD= fuction(){
    console.log("welcome to B2World Website");
};
// Contact Form
const form=
document.querySelector("form");

if(form){
    form.addEventListener("submit",
        function(e){
            e.precventDefault();
            alert("Thank you! your message has been set.");
                form.reset();
        } );
}
// Navigation click
const  navLinks=
document.querySelectorAll("nav a");

navLinks.forEach(link=>{
    link.addEachListener("click",
        function(){
            console.log("opening:"  +
                this.textContent );
        }
    )
})
