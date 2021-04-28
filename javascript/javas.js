

window.onscroll = function() {
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        document.getElementById("navbar").style.padding = "30px";
        document.querySelector("a").style.marginLeft = "300px";
        document.getElementById("w2r").style.marginLeft = "70px";
    }
    else{
        document.getElementById("navbar").style.padding = "40px";
        document.querySelector("a").style.marginLeft = "70px";
        document.getElementById("w2r").style.marginLeft = "250px";
    }
};
window.onload = function(){
    document.getElementById("navbar").style.padding = "40px";
    document.querySelector("a").style.marginLeft = "70px";
    document.getElementById("w2r").style.marginLeft = "250px";
};



const menuBtns = document.querySelectorAll('.menu-btn');
const foodItems = document.querySelectorAll('.food-item');

let activeBtn = "featured";

showFoodMenu(activeBtn);

menuBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        resetActiveBtn();
        showFoodMenu(btn.id);
        btn.classList.add('active-btn');
    });
});

function resetActiveBtn(){
    menuBtns.forEach((btn) => {
        btn.classList.remove('active-btn');
    });
}

function showFoodMenu(newMenuBtn){
    activeBtn = newMenuBtn;
    foodItems.forEach((item) => {
        if(item.classList.contains(activeBtn)){
            item.style.display = "grid";
        } else {
            item.style.display = "none";
        }
    });
}