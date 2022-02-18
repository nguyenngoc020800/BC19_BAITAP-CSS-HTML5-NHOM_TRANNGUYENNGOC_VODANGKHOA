document.getElementById('darktheme').onclick = function(){
    document.getElementById('darktheme').classList.toggle('tg');
}

function navScroll(){
    if(document.body.onscroll >200 || document.documentElement.onscroll > 200){
       const headerEl =  document.getElementsByTagName('header').style.padding = "0 0"
    }
}
navScroll();