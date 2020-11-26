 document.addEventListener('DOMContentLoaded',(e)=>{
            e.preventDefault();
            let el = document.querySelector("ul:first-child li");
              let comp = document.querySelector("ul:last-child li");
              let parc = document.querySelector("ul:last-child li+li");
              let contact = document.querySelector("ul:last-child li+li+li");
              let btn = document.querySelector("main section:first-child a");

               //event
                 //first
                 el.addEventListener("click",()=>{
                   //alert("ok")
                   comp.classList.remove("active")
                   parc.classList.remove("active")
                   contact.classList.remove("active")
                   el.classList.add("active")
                   
               })
               //second
               comp.addEventListener("click",()=>{
                  
                   el.classList.remove("active")
                   parc.classList.remove("active")
                   contact.classList.remove("active")
                   comp.classList.add("active")
                   
               })
             
               parc.addEventListener("click",()=>{
                   //alert("ok")
                   comp.classList.remove("active")
                   el.classList.remove("active")
                   contact.classList.remove("active")
                   parc.classList.add("active")
                   
                   
               })
               //last
               contact.addEventListener("click",()=>{
                   //alert("ok")
                   comp.classList.remove("active")
                   el.classList.remove("active")
                   parc.classList.remove("active")
                   
                   contact.classList.add("active")
                   
               })
               //bouton
               btn.addEventListener("click",()=>{
                   //alert("ok")
                   comp.classList.remove("active")
                   el.classList.remove("active")
                   contact.classList.remove("active")
                   
                   parc.classList.add("active")
                   
               })

               
})