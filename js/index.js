const bg1s = document.querySelectorAll(".bg1");
const bg2s = document.querySelectorAll(".bg2");
const titlecolors = document.querySelectorAll(".titlecolor");
const fontcolors = document.querySelectorAll(".fontcolor");
let i = 1;
document.getElementById("darktheme").onclick = function () {
  document.getElementById("darktheme").classList.toggle("tg");
  i++;
};

// function darkthemenavScroll() {
//   if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
//     document.getElementById("header").style.padding = "0 0";
//     document.getElementById("header").style.position = "fixed";
//   }
//   if (document.body.scrollTop <= 1 || document.documentElement.scrollTop <= 1) {
//     document.getElementById("header").style.padding = "15px 0";
//     document.getElementById("header").style.position = "absolute";
//   }
// }

// window.onscroll = () => {
//   if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
//     document.getElementById("header").style.padding = "0 0";
//     document.getElementById("header").style.position = "fixed";
//   }
//   if (
//     document.body.scrollTop <= 10 ||
//     document.documentElement.scrollTop <= 10
//   ) {
//     document.getElementById("header").style.padding = "15px 0";
//     document.getElementById("header").style.position = "absolute";
//   }
// };

// button dropdown menu
let abc = 1;
document.getElementById("togglerButton").onclick = () => {
  abc++;
  if (Math.floor(abc % 2) === 0) {
    document.getElementById("togglerButton").classList.add("fa", "fa-times");
    document.getElementById("togglerButton").classList.remove("fas", "fa-bas");
  } else {
    document.getElementById("togglerButton").classList.remove("fa", "fa-times");
    document.getElementById("togglerButton").classList.add("fas", "fa-bas");
  }
};

// button dropdown menu

// function darktheme

// function darktheme
