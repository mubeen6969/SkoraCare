// = = =  ===== === == == =

const mobileNav = document.querySelector(
    ".nav-btn");
const navBar = document.querySelector(".navbar")
const toggleNavbar = () => {
    navBar.classList.toggle("active");
};
mobileNav.addEventListener("click", () => toggleNavbar() );


// const tl = gsap.timeline()

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
  gsap.to([ ".nav-links a", "#nav .icons", ".icons .nav-btn",".icons .nav-btn #menu"],{
    color:"#fff",
    borderColor: '#fff',
    duration: 0.5,
    scrollTrigger:{
        trigger:".nav-links",
        scroller:"body",
        start: "top -5%",
        end: "top -11%",
        // markers:true,
        scrub: 1

    }
  });

 function showalert(){
  alert("Dont Click Here");
 }
 function cart(){
  alert("Not working yet😅 ");
 }