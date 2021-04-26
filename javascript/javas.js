window.onscroll = function() {
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        document.getElementById("navbar").style.padding = "30px";
        document.querySelector("a").style.marginLeft = "300px";
    }
    else{
        document.getElementById("navbar").style.padding = "50px";
        document.querySelector("a").style.marginLeft = "70px";
    }
};
window.onload = function(){
    document.getElementById("w2r").style.marginLeft = "180px";
};