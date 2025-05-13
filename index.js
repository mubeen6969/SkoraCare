// = = =  ===== === == == =

const mobileNav = document.querySelector(
  ".nav-btn");
const navBar = document.querySelector(".navbar")
const toggleNavbar = () => {
  navBar.classList.toggle("active");
};
mobileNav.addEventListener("click", () => toggleNavbar());

// -----------home animate--------------

const tl = gsap.timeline()
function homeAnimate() {


  tl.from('.navbar .brand h1', {
    x: -100,
    delay: 1,
    duration: 1,
    opacity: 0
  })
  tl.from('.navbar ul li', {
    y: -20,
    stagger: 0.2,
    duration: 0.5,
    opacity: 0
  }, "-=0.5")
  tl.from('.navbar .icons', {
    x: 100,
    duration: 1,
    opacity: 0
  }, "-=0.5")
  tl.from(['.offer-text h1', '.offer-text .discount', '.offer-text p'], {
    x: -100,
    duration: 1,
    // delay:1,
    opacity: 0,
    stagger: 0.2
  }, "-=1")
  tl.from('.offer-text button', {
    y: 50,
    opacity: 0,
    duration: 1
  })

  gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "70px",
    scrollTrigger: {
      trigger: "#nav",
      scroller: "body",
      //   markers:true,
      start: "top -10%",
      scrub: 1
    }
  });

  gsap.to([".nav-links li a", "#nav .icons", ".icons .nav-btn", ".icons .nav-btn #menu"], {
    color: "#fff",
    borderColor: '#fff',
    duration: 0.5,
    scrollTrigger: {
      trigger: ".nav-links",
      scroller: "body",
      start: "top -5%",
      // end: "top -11%",
      scrub: 1
      // markers:true

    }
  });
}


homeAnimate();


// ---------container3Animate--------

const container3Animate = () => {
  gsap.from(['.animate .left-section h2', '.animate .left-section p', '.animate .left-section button'], {
    x: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.animate .left-section',
      scroller: 'body',
      start: 'top 70%',
      // markers: true
    }
  });

  // Animation 2: Product Cards
  gsap.from('.animate .product-card', {
    x: '100%',
    opacity: 0,
    duration: 1.5,
    stagger: 0.4,
    delay: 0.5,
    scrollTrigger: {
      trigger: '.animate .left-section',
      scroller: 'body',
      start: 'top 70%',
      // markers: true
    }
  });
}

container3Animate();



// ----------container-5Animate----------

function container5Animate() {

  gsap.from(['.container-5 .left-section h2', '.container-5 .left-section p', '.container-5 .left-section button'], {
    x: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
      scroller: 'body',
      trigger: '.container-5',
      start: 'top 60%',
      // markers: true
    }
  });

  gsap.from('.container-5 .product-card', {
    x: -100,
    opacity: 0,
    stagger: -0.4,
    duration: 1,
    scrollTrigger: {
      scroller: 'body',
      trigger: '.container-5',
      start: 'top 60%'
      // markers: true
    }
  });
}


container5Animate();



// --------------container-6 Animate------------
function container6Animate() {
  gsap.from('.container-6 h1', {
    x: -200,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
      scroller: 'body',
      trigger: '.container-6',
      start: 'top 60%'
      // markers:true
    }
  })
  gsap.from('.container-6 .bundle', {
    y: 100,
    opacity: 0,
    stagger: 0.3,
    duration: 1.5,
    scrollTrigger: {
      scroller: 'body',
      trigger: '.bundle',
      start: 'top 60%'
      // markers:true
    }
  })
}


container6Animate();



// --------------container8Animate---------

function container_8Animate() {
  gsap.from('.container-8 h1', {
    x: -200,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      scroller: 'body',
      trigger: '.container-8',
      start: 'top 60%'
      // markers:true
    }
  })

  gsap.from('.container-8 .video', {
    x: 200,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      scroller: 'body',
      trigger: '.container-8 .video',
      start: 'top 60%'
      // markers:true
    }
  })
}

container_8Animate();

function showalert() {
  alert("Dont Click Here");
}
function cart() {
  alert("Not working yet😅 ");
}