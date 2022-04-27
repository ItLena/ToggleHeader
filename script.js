const menu = document.getElementsByClassName('menu')[0];
const menuBox = document.getElementsByClassName('menu-box')[0];
const logoBox = document.getElementsByClassName('logo-box')[0];
const listh1 = document.getElementsByClassName('list-head')[0];



menu.addEventListener("click", function(){
    console.log("hej")
    this.classList.toggle("active")
    function hideMenu(){
        const text = document.getElementsByTagName('ul')[0];
        
        if(text.style.display === "block"){
            text.style.display ="none"
            logoBox.style.backgroundColor ="#BB96B3"
            menuBox.style.backgroundColor ="#BB96B3"           
            listh1.style.display = "block"
        }else{
            text.style.display ="block"           
            logoBox.style.backgroundColor ="#413661"          
            menuBox.style.backgroundColor ="#413661"             
            listh1.style.display = "none"   
       }
    }
    
hideMenu()

})