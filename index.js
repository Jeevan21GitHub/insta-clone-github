function function1(){
    var show=document.getElementById("show");
    var toggle=document.getElementById("toggle");
    if(show.style.display==="none"){
        show.style.display="block";
        toggle.className="fa fa-angle-down";
    }
    else{
        show.style.display="none";
        toggle.className="fa fa-angle-up";
    }
       
}
function editFunction(){
    var show=document.getElementById("editShow");
    if(show.style.display==="none"){
        show.style.display="block";
        
    }
    else{
        show.style.display="none";
    }
}