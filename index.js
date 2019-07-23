window.onload = window.scrollTo(0, 0);
AOS.init();

$(document).ready(function() {
  var scrollTop = 0;
  $(window).scroll(function() {
    scrollTop = $(window).scrollTop();

    if (scrollTop >= 100) {
      $("#main-nav").addClass("scrolled-nav");
      $("#reload-from-logo").addClass("main-nav-logo-scrolled");
    } else if (scrollTop < 100) {
      $("#main-nav").removeClass("scrolled-nav");
      $("#reload-from-logo").removeClass("main-nav-logo-scrolled");
    }
  });
});

// const toAbout = document.querySelector(".to-about");
// toAbout.addEventListener("click", () => {
//   const aboutMe = document.querySelector("#about");
//   aboutMe.scrollIntoView();
// });

const toPortfolio = document.querySelector(".to-contact");
toPortfolio.addEventListener("click", () => {
  const aboutMe = document.querySelector("#contact");
  aboutMe.scrollIntoView();
});

// const toContact = document.querySelector(".to-about-arrow");
// toContact.addEventListener("click", () => {
//   const aboutMe = document.querySelector("#about");
//   aboutMe.scrollIntoView();
// });

var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 1000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 150 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 1px solid #b6b6b6}";
  document.body.appendChild(css);
};

document.getElementById("reload-from-logo").addEventListener("click", () => {
  window.scrollTo(0, 0);
});
