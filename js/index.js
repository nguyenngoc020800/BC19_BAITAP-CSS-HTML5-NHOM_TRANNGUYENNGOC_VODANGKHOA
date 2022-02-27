const bg1s = document.querySelectorAll('.bg1');
const bg2s = document.querySelectorAll('.bg2');
const titlecolors = document.querySelectorAll('.titlecolor');
const fontcolors = document.querySelectorAll('.fontcolor');
let i = 1
 document.getElementById('darktheme').onclick = function(){
    document.getElementById('darktheme').classList.toggle('tg');
    i++; 
    if(Math.floor(i%2)===0){
      for(const bg1 of bg1s){
        bg1.classList.add('darktheme-bg1')
      }
      for(const bg2 of bg2s){
        bg2.classList.add('darktheme-bg2')
      }
      for(const titlecolor of titlecolors){
        titlecolor.classList.add('darktheme-titlecolor')
      }
      for(const fontcolor of fontcolors){
        fontcolor.classList.add('darktheme-fontcolor')
      }
    }else{
      for(const bg1 of bg1s){
        bg1.classList.remove('darktheme-bg1')
      }
      for(const bg2 of bg2s){
        bg2.classList.remove('darktheme-bg2')
      }
      for(const titlecolor of titlecolors){
        titlecolor.classList.remove('darktheme-titlecolor')
      }
      for(const fontcolor of fontcolors){
        fontcolor.classList.remove('darktheme-fontcolor')
      }
    
    }
    
  }
  
  function darkthemenavScroll(){
    if(document.body.scrollTop >10 || document.documentElement.scrollTop > 10){
      document.getElementById('header').style.padding = "0 0"
      document.getElementById('header').style.position = "fixed"
      
      
      
    }
    if(document.body.scrollTop <=10 || document.documentElement.scrollTop <= 10){
      document.getElementById('header').style.padding = "15px 0"
      document.getElementById('header').style.position = "absolute"
      
        }
      }
        
        
        window.onscroll = () =>{
            darkthemenavScroll();
          }

// button dropdown menu
let abc=1;
document.getElementById('togglerButton').onclick = () =>{
  abc++;
  if(Math.floor(abc%2) ===0){
    document.getElementById('togglerButton').classList.add('fa', 'fa-times')
    document.getElementById('togglerButton').classList.remove('fas', 'fa-bas') 
  }else{
    document.getElementById('togglerButton').classList.remove('fa', 'fa-times')
    document.getElementById('togglerButton').classList.add('fas', 'fa-bas') 
  }
}

// button dropdown menu

// function darktheme
 
// function darktheme 


