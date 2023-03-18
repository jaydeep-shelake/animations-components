import gsap from "gsap"
const tl = gsap.timeline({repeat:-1})
tl.to('.outer-circle', 6 , { rotation: 360, ease: "Power0.easeNone",});
tl.to('.first-img', 6,{ rotation: -360 },0)
