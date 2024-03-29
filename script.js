var tl = gsap.timeline();
gsap.set(".a",{
    opacity:0 , y:10 
})
gsap.set("#right>img",{
    opacity: 0 , scale:1.2
})
tl.from("#left",{
    width : 0 , duration: 1.5 , ease: Expo.easeInOut 
})

.from("#right",{
    delay:-1,
    width : 0 , duration: 1.5 , ease: Expo.easeInOut 
})
.to(".a",{
    delay:-1.5,
    opacity : 1, y : 0 ,stagger:.11, duration: 1.5 , ease: Expo.easeInOut 
})
.to("#right>img",{
    delay:-1.5,
    opacity:1 , scale:1 , duration: 1
})

