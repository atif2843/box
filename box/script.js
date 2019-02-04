
var x = document.getElementById("btnhd");
var a=document.getElementById("main");
    function onlre(){
        document.getElementById("moveup").style.height="0px";
        document.getElementById("moveup").style.transition="height 1s ease-in-out";
        document.getElementById("btnhd").style.opacity="0";
        document.getElementById("btnhd").style.transition="opacity 1s ease-in-out";
        a.className= a.className.replace(/\bmain2\b/g, "");
        document.getElementById("moveup").addEventListener("transitionend", myFunction);  
}
    function myFunction() {
        this.style.visibility = "hidden";
        a.style.width="100%";
        a.style.transition="all 1s ease-in-out";
        a.style.visibility="visible";   
}

var navmenu=document.getElementById("navmenu");
var nvabar=document.getElementById("navbar");
var navbarc=document.getElementsByClassName("navbarc");
function openmenu(){
        navmenu.style.width="48vw";
        navmenu.style.transition="width 1s ease-in-out cubic-bezier(0.45, 0.05, 0.23, 1.18) 1   s"; 
        nvabar.style.transform="scale(1)";
        nvabar.style.transition="transform 1s  ease-in-out";
}
        function myliFunction(){
                
        }
function closemenu(){
        nvabar.style.transform="scale(0)";
        nvabar.style.transition="transform 1s";
        navmenu.style.width="0vw";
        navmenu.style.transition="width 1s ease-in-out cubic-bezier(0.45, 0.05, 0.23, 1.18) 1s";
        navbar.addEventListener("transitionend", myliclsFunction); 
}
    function myliclsFunction(){
        
    }   
