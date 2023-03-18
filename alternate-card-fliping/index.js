import gsap from "gsap"
const container = document.getElementById('container')

const superBioImage = [
  {
    firstrowFront: 'https://res.cloudinary.com/qtalk/image/upload/v1678196975/SSUP%20Dashboard/loginback5_ckvohb.png',
    firstrowBack: 'https://res.cloudinary.com/qtalk/image/upload/v1678262715/SSUP%20Dashboard/Frame_427319525_o5dyt1.png',
    secondrowFront: 'https://res.cloudinary.com/qtalk/image/upload/v1678196975/SSUP%20Dashboard/loginback6_ew4veg.png',
    secondrowBack: 'https://res.cloudinary.com/qtalk/image/upload/v1678262765/SSUP%20Dashboard/Frame_427319526_szygvl.png',
  },
  {
    firstrowFront: 'https://res.cloudinary.com/qtalk/image/upload/v1678196831/SSUP%20Dashboard/loginback4_m5ou76.png',
    firstrowBack: 'https://res.cloudinary.com/qtalk/image/upload/v1678262465/SSUP%20Dashboard/lpogin2_back_miurn1.png',
    secondrowFront: 'https://res.cloudinary.com/qtalk/image/upload/v1678196830/SSUP%20Dashboard/loginback3_hfkwyy.png',
    secondrowBack: 'https://res.cloudinary.com/qtalk/image/upload/v1678262465/SSUP%20Dashboard/loginback__jv8c9h.png',
  },
  {
    firstrowFront: 'https://res.cloudinary.com/qtalk/image/upload/v1678196721/SSUP%20Dashboard/loginback1_bpu93m.png',
    firstrowBack: 'https://res.cloudinary.com/qtalk/image/upload/v1678262075/SSUP%20Dashboard/loginback_1_alwpkv.png',
    secondrowFront: 'https://res.cloudinary.com/qtalk/image/upload/v1678196722/SSUP%20Dashboard/loginback2_jxkqxw.png',
    secondrowBack: 'https://res.cloudinary.com/qtalk/image/upload/v1678262074/SSUP%20Dashboard/loginback_2_yjuynn.png',
  },
]
 superBioImage.forEach((image,i)=>{
  container.innerHTML+=  `
    <div class="flex gap scene ${(i)%2!==0?'flex-row-reverse my':''}">
      <div class="content bio">
        <div class="front ">
          <img src="${image.firstrowFront}"
            alt="scene1-front" />
        </div>
        <div class="back ">
          <img src="${image.firstrowBack}"
            alt="scene1-back" />
        </div>
      </div>
      <div class="content content1 image">
        <div class="front">
          <img src="${image.secondrowFront}"
            alt="scene1-front" />
        </div>
        <div class="back">
          <img src="${image.secondrowBack}"
            alt="scene1-back" />
        </div>
      </div>
    </div>
    `
})
let bio = document.querySelectorAll('.bio')
  let image = document.querySelectorAll('.image')
  bio = Array.from(bio).reverse()
  image = Array.from(image).reverse()
  const tl = gsap.timeline({ repeat: -1 })
  tl.to(bio, { rotateY: 180, duration: 1.5, stagger: 1, ease: "power1.inOut", });
  tl.to(image, { rotateY: 180, duration: 1.5, stagger: 1, ease: "power1.inOut", });
  tl.to(bio, { rotateY: 360, duration: 1.5, stagger: 1, ease: "power1.inOut", });
  tl.to(image, { rotateY: 360, duration: 1.5, stagger: 1, ease: "power1.inOut", });
  