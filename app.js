

//Navbar
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

const navSlide = () =>{
    
    burger.addEventListener('click', ()=>{
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation = '';
            } else {
                //Initial delay: +0.5
                //Delay for each link: /7 (/2 takes longer)
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +0.5}s`;
            } 
        });

        //Burger Animation
        burger.classList.toggle('toggle');

    });
}
//////



const app = () =>{
    navSlide();
}

app();





//Typing animation
const words = ["Theodor.", "a Student.", "a Web Developer."];

let cursor = gsap.to('.cursor', {opacity: 0, ease: "power2.inOut", repeat: -1});

let boxTL = gsap.timeline();

boxTL.to('.box', {duration: 1, width:"17vw", delay: 0.5, ease:"power4.inOut"})
      .from('.hi', {duration: 1, y:"7vw", ease:"power3.out", onComplete: () => masterTL.play()})
      .to('.box', {duration: 1, height:"7vw", ease:"elastic.out"})
      .to('.box', {duration:2, autoAlpha:0.7, yoyo: true, repeat: -1});


let masterTL = gsap.timeline({repeat: -1}).pause();

words.forEach( w => {
  let tl = gsap.timeline({repeat: 1, yoyo:true, repeatDelay: 1});
  tl.to('.text', {duration: 1, text: w});
  masterTL.add(tl);
})
///////////




///Nav Hover animation

//HOME
let navTL1 = gsap.timeline({paused:true});
navTL1.from('.u1', {duration: 0.25, width:"0vw", ease:"power0"});

let home = document.getElementById('ahome');

home.addEventListener("mouseenter", () => navTL1.play());
home.addEventListener("mouseleave", () => navTL1.reverse());



//ABOUT
let navTL2 = gsap.timeline({paused:true});
navTL2.from('.u2', {duration: 0.25, width:"0vw", ease:"power0"});

let about = document.getElementById('aabout');

about.addEventListener("mouseenter", () => navTL2.play());
about.addEventListener("mouseleave", () => navTL2.reverse());



//PROJECTS
let navTL3 = gsap.timeline({paused:true});
navTL3.from('.u3', {duration: 0.25, width:"0vw", ease:"power0"});

let projects = document.getElementById('aprojects');

projects.addEventListener("mouseenter", () => navTL3.play());
projects.addEventListener("mouseleave", () => navTL3.reverse());



///Contact
let navTL4 = gsap.timeline({paused:true});
navTL4.from('.u4', {duration: 0.25, width:"0vw", ease:"power0"});

let contact = document.getElementById('acontact');

contact.addEventListener("mouseenter", () => navTL4.play());
contact.addEventListener("mouseleave", () => navTL4.reverse());

///Nav hover Animation end 



//About section
let aboutTL = gsap.timeline({
    scrollTrigger: {
        trigger: ".aboutMe",
        start: "40% 70%",
    }
})

aboutTL.to("#aboutH2", {opacity:1, top:0, duration: 0.5, ease: "sine.out"});
aboutTL.to("#aboutP", {opacity:1, top:0, duration: 0.5,ease: "sine.out"});
////


///My Projects


//title
let myProjects = gsap.timeline({
    scrollTrigger: {
        trigger: "#myProjectsTitle",
        start: "40% 60%",
    }
})
myProjects.to("#myProjectsTitle", {opacity:1, right:0, duration: 0.65})
///


//image1 (birthday)
let birthdayTL = gsap.timeline({
    scrollTrigger: {
        trigger: "#image1",
        start: "top 55%",
    }
})

birthdayTL.to("#image1", {opacity:1, left:0, duration: 0.65})



let image1Layer = gsap.timeline({
    scrollTrigger: {
        trigger: "#image1Layer",
        start: "top 55%",
        //markers: true
    }
})
image1Layer.to("#image1Layer", {left:0, duration: 0.6, delay: 0.2})
image1Layer.to("#image1Layer", {scaleX:0, transformOrigin:"100% bottom", duration: 0.65})

let image1P = gsap.timeline({
    scrollTrigger: {
        trigger: "#image1P",
        start: "top 55%",
        //markers: true
    }
})

image1P.to("#image1P", {left:0, duration:0.6})

////





//image2 (crypto)
let cryptoTL = gsap.timeline({
    scrollTrigger: {
        trigger: "#image2",
        start: "top 55%",
    }
})

cryptoTL.to("#image2", {opacity:1, left:0, duration: 0.6})

let image2Layer = gsap.timeline({
    scrollTrigger: {
        trigger: "#image2Layer",
        start: "top 55%",
        //markers: true
    }
})
image2Layer.to("#image2Layer", {left:0, duration: 0.6})
image2Layer.to("#image2Layer", {scaleX:0, transformOrigin:"0% bottom"})

let image2P = gsap.timeline({
    scrollTrigger: {
        trigger: "#image2P",
        start: "top 55%",
        //markers: true
    }
})

image2P.to("#image2P", {left:0, duration:0.6})
///


///image3 (portofolio)
let portofolioTL = gsap.timeline({
    scrollTrigger: {
        trigger: "#image3",
        start: "top 55%",
    }
})

portofolioTL.to("#image3", {opacity:1, left:0, duration: 0.6})

let image3Layer = gsap.timeline({
    scrollTrigger: {
        trigger: "#image3Layer",
        start: "top 55%",
        //markers: true
    }
})
image3Layer.to("#image3Layer", {left:0, duration: 0.6, delay: 0.2})
image3Layer.to("#image3Layer", {scaleX:0, transformOrigin:"100% bottom", duration: 0.65})

let image3P = gsap.timeline({
    scrollTrigger: {
        trigger: "#image3P",
        start: "top 55%",
        //markers: true
    }
})

image3P.to("#image3P", {left:0, duration:0.6})

///

