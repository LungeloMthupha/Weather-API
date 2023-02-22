gsap.fromTo('.logo',{
    opacity:0,
    y:100
},{
    opacity:1,
    duration: 1,
    y:-10,
    ease: Power2.easeInOut,
    onComplete() {
        gsap.to('.logoback', { 
        width:"100px",
        height:"100px",
        scale:1,
        duration:2,
        onComplete() {
            gsap.to('.logoback', { 
            borderRadius:"20px",
            duration:1,
            onComplete() {
                gsap.to('.logoback', { 
                x:-100,
                duration:1,
                onStart() {
                    gsap.fromTo('.appname', { 
                    opacity: -3,
                    x:0,
                        },{
                            x:170,
                            opacity:1,
                            duration:1,
                            onComplete() {
                                gsap.to('.appname', { 
                                opacity: 0,
                                duration:3,
                                onStart() {
                                    gsap.to('.logoback',{
                                        opacity: 0,
                                        })
                                        },
                                        onComplete(){
                                            window.location = "app/index.html"
                                        }
                                    })
                                 },
                            })
                         },
                    })
                },
            })
        },
    })
},        
});