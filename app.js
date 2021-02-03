
// ------    Greeting Text Logic     ----//
let greetText = document.querySelector('.greet')
let myimg = document.querySelector('.card img')

const text = ["HEY","HELLO","BONJOUR","HOLA","CIAO","ALOHA","SALUT"];
let i = 0;
let index = 0;

function greet(){
    if(index > text[i].length){
        i++;
        index = 0;
    };
     if(i >= text.length){
    i = 0;
    index = 0;
   };
    greetText.innerHTML = `${text[i].slice(0, index)}_`;
    index++;
}
setInterval(greet,375);

// ----- Mobile Nav Toggler -----//

let burger = document.querySelector('.burger');
let mobileNav = document.querySelector('.mobile-nav');
burger.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    if(mobileNav.classList.contains('active')){
        let navTl = gsap.timeline({default: {ease: 'power1.out'}})
        navTl.fromTo('.mobile-nav ul li', {x:'100%', opacity:0},{duration: .2,x:'0%', opacity: 1,stagger: .3},'+=0.35')
    } 
})


//-----       Gsap Animations    ------ //
let tl = gsap.timeline({default: {ease: "power1.out"}})

tl.fromTo('nav',{y: '-100%', opacity: 0},{y:"0%", opacity: 1, duration:.4},'+=.4');
tl.from('.logo',{x:'-60px', opacity: 0,duration:0.35},"-=0.1");
tl.fromTo('ul li a',{opacity:0,scale:1.2},{opacity:1,scale:1, stagger:.18});
tl.fromTo('.burger',{opacity: 0, x:'100%'},{opacity:1, x:'0%'},'-=1')
tl.from('.bg-underlay',{width:'0',duration:1.2}, '-=0.3');
tl.from('.card',{y:"-50%",opacity:0,duration:.9});
tl.from('.card img',{opacity: 0, rotate:66,duration:1},"-=1")
tl.from('.infodown',{y:"100%",duration:1.1, ease:"Bounce.easeOut"},"+=1")
tl.from('.infoup',{y:"-100%",duration:1.1, ease:"Bounce.easeOut"},"-=1.1")

//-------- Scroll Trigger Animations -------//

gsap.registerPlugin(ScrollTrigger)


gsap.from('.develop',{x:'100%',opacity: 0, 
scrollTrigger:{
   trigger: '.develop',
   scrub:1, 
    start:'top bottom+=100',
    end:'bottom bottom+=150',
}})


gsap.from('.develop-img',{x:'-60%',opacity:0,
scrollTrigger: {
    trigger: '.develop-img img',
    scrub: 3,
    start:'top bottom-=100',
    end:'bottom bottom-=100',
}})

gsap.from('.develop-writing',{x:'60%',opacity:0,
scrollTrigger: {
    trigger: '.develop',
    scrub: 3,
    start:'top bottom-=100',
    end:'bottom bottom-=100',
}})


gsap.from('.design',{y:'-50%', scale:1.2 ,opacity: 0, 
scrollTrigger:{
   trigger: '.design',
   scrub:2, 
    start:'top bottom+=100',
    end:'bottom bottom-=100',
}})


gsap.from('.design-img',{x:'60%',opacity:0,
scrollTrigger: {
    trigger: '.design-img img',
    scrub: 3,
    start:'top bottom-=100',
    end:'bottom bottom+=100',
}})


gsap.from('.teaching',{x:'-100%',opacity: 0, 
scrollTrigger:{
   trigger: '.teaching',
   scrub:2, 
    start:'top bottom+=100',
    end:'bottom bottom+=200',
}})



gsap.from('.teaching-img ',{y:'-50%',opacity:0,
scrollTrigger: {
    trigger: '.teaching-img img',
    scrub: 4,
    start:'top bottom-=100',
    end:'bottom bottom+=100',
}})


gsap.from('.teaching-writing',{y:'60%',opacity:0,
scrollTrigger: {
    trigger: '.teaching',
    scrub: 4,
    start:'top bottom-=100',
    end:'bottom bottom-=100',
}})





