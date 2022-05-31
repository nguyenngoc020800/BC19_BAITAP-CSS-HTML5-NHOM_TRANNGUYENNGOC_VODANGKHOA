$(document).ready(function () {
  $(".slider-btl").slick({
    dots: true,
    infinite: true,
    speed: 2000,
    fade: true,
    cssEase: "linear",
    slidesToShow: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow:
      '<button type="button" id="slick-arrow-prev" onclick="handleClick(`prev`)" class= "slick-prev slick-arrow">Previous</button>',
    nextArrow:
      '<button type="button" id="slick-arrow-next" onclick="handleClick(`next`)" class="slick-next slick-arrow">Next</button>',
  });
});

// $(".feedback__content").slick({
//   dots: true,
//   arrows: false,
// });

let isAutoClick = true;
function handleClick(type) {
  window.onclick = (e) => {
    isAutoClick = false;
  };
  const slickAcctive = document.getElementsByClassName(
    "slick-active slick-slide s2"
  );
  let index = +slickAcctive[0].getAttribute("index");
  if (type === "next") {
    if (index === 4) {
      index = 1;
    } else {
      index = index + 1;
    }
  } else {
    if (index === 1) {
      index = 4;
    } else {
      index = index - 1;
    }
  }
  const header = document.getElementsByClassName(`bg${index}-header`)[0];
  const paragraph = document.getElementsByClassName(`bg${index}-paragraph`)[0];
  const button = document.getElementsByClassName(`bg${index}-btn`)[0];
  header.classList.toggle(`bg${index}-header`);
  paragraph.classList.toggle(`bg${index}-paragraph`);
  button.classList.toggle(`bg${index}-btn`);
  setTimeout(() => {
    header.classList.toggle(`bg${index}-header`);
    paragraph.classList.toggle(`bg${index}-paragraph`);
    button.classList.toggle(`bg${index}-btn`);
  }, 100);
}

const autoClick = setInterval(() => {
  if (isAutoClick) {
    document
      .getElementById("slick-arrow-next")
      .dispatchEvent(new Event("click"));
  } else {
    clearInterval(autoClick);
  }
}, 2000);

var modal = document.getElementById("modal");
var img = document.getElementById("img-modal");
var modalImg = document.getElementById("img-modal");
var caption = document.getElementById("caption-modal");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  caption.innerHTML = this.alt;
};

var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.style.display = "none";
};
