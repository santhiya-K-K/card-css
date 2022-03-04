window.onload=function(){
    var button=document.querySelectorAll(".btn")
    button.forEach((elem)=>[
        elem.addEventListener("click",()=>{
            if(elem.nextElementSibling.style.display=="block"){
                elem.nextElementSibling.style.display="none"
                elem.innerHTML="show"
            }
            else{
                elem.nextElementSibling.style.display="block"
                elem.innerHTML="hide"
            }
        })
    ])
}
x()