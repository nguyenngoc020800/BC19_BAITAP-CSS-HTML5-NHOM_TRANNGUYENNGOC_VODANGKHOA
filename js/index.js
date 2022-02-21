const bg1s = document.querySelectorAll('.bg1');
const bg2s = document.querySelectorAll('.bg2');
const titlecolors = document.querySelectorAll('.titlecolor');
const fontcolors = document.querySelectorAll('.fontcolor');
const navlinkactivescrolls = document.querySelectorAll(".navlinkactivescroll");
const navlinkscrolls = document.querySelectorAll(".navlinkscroll");
const navlogoscrolls = document.querySelectorAll(".navlogoscroll");


  let i=1
 document.getElementById('darktheme').onclick = function(){
    document.getElementById('darktheme').classList.toggle('tg');
    i++;
    document.getElementById('number').innerHTML = `${i}`
    // function darktheme 
    // if(Math.floor(i%2)===0){
    //   // for(const bg1 of bg1s){
    //   //   bg1.classList.add('darktheme-bg1')
    //   // }
    //   // for(const bg2 of bg2s){
    //   //   bg2.classList.add('darktheme-bg2')
    //   // }
    //   // for(const titlecolor of titlecolors){
    //   //   titlecolor.classList.add('darktheme-titlecolor')
    //   // }
    //   // for(const fontcolor of fontcolors){
    //   //   fontcolor.classList.add('darktheme-fontcolor')
    //   // }
    // }else{
    //   // for(const bg1 of bg1s){
    //   //   bg1.classList.remove('darktheme-bg1')
    //   // }
    //   // for(const bg2 of bg2s){
    //   //   bg2.classList.remove('darktheme-bg2')
    //   // }
    //   // for(const titlecolor of titlecolors){
    //   //   titlecolor.classList.remove('darktheme-titlecolor')
    //   // }
    //   // for(const fontcolor of fontcolors){
    //   //   fontcolor.classList.remove('darktheme-fontcolor')
    //   // }
    //   // window.onscroll = () =>{
    //   //   lightthemenavScroll();
    //   // }

    // }
    
    let classname =  document.getElementById('darktheme').className;
    console.log(classname)
}
const numberEl = document.getElementById('number').innerHTML;
console.log(numberEl)

function lightthemenavScroll(){
    if(document.body.scrollTop <=10 || document.documentElement.scrollTop <= 10){
      document.getElementById('header').style.padding = "15px 0"
      document.getElementById('header').style.position = "absolute"
      document.getElementById('header').style.backgroundColor = "transparent"

      //navbar item active
      // const navlinkactivescrolls = document.querySelectorAll(".navlinkactivescroll");
      for(const navlinkactivescroll of navlinkactivescrolls){
        navlinkactivescroll.classList.add('navscrollcolor__actived')
      }
      //nav bar item not active
      const navlinkscrolls = document.querySelectorAll(".navlinkscroll");
      for(const navlinkscroll of navlinkscrolls){
       navlinkscroll.classList.add('navscrollcolor')}
       //navbar logo 
       const navlogoscrolls = document.querySelectorAll(".navlogoscroll");
       for(const navlogoscroll of navlogoscrolls){
        navlogoscroll.classList.add('navscrolllogo')}


    }else{
      document.getElementById('header').style.padding = "0 0"
      document.getElementById('header').style.position = "fixed"
      // document.getElementById('header').style.backgroundColor = "#fff"
      //navbar item active
      const navlinkactivescrolls = document.querySelectorAll(".navlinkactivescroll");
      for(const navlinkactivescroll of navlinkactivescrolls){
        navlinkactivescroll.classList.remove('navscrollcolor__actived')
      }
      //nav bar item not active
      const navlinkscrolls = document.querySelectorAll(".navlinkscroll");
      for(const navlinkscroll of navlinkscrolls){
       navlinkscroll.classList.remove('navscrollcolor')}
       //navbar logo 
       const navlogoscrolls = document.querySelectorAll(".navlogoscroll");
       for(const navlogoscroll of navlogoscrolls){
        navlogoscroll.classList.remove('navscrolllogo')}}
}


// window.onscroll = () =>{
//   darkthemenavScroll();
// }

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


