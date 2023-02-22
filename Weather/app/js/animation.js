gsap.registerPlugin(ScrollTrigger);


function heroAnimation(){
    
    let text = gsap;
    text.fromTo('.logpart',{
        x:-100,
        opacity: 0,
    },{
        x:0,
        opacity:1,
        duration:1,
        ease: Power2.easeInOut,
        stagger:0.5,
        onStart() {
            gsap.fromTo('.hero',{
                x:-100,
                 opacity:0,
            },{
                x:0,
                opacity:1,
                delay:0.5,
            })
        },onComplete() {
            gsap.fromTo('.coolLogo',{
                 opacity:0,
            },{
                x:0,
                opacity:1,
                delay:0.5,
                onComplete() {
                    gsap.fromTo('.personalInfo',{
                         opacity:0,
                    },{
                        x:0,
                        opacity:1,
                        delay:0.5,
                    })
                }
            })
        }

    })
};

function resultAnimation(){
    let text = gsap;
    
    text.fromTo('.resultFor',{
        x:-50,
        opacity:0,
    },{
        x:0,
        opacity:1,
        ease: Power2.easeInOut,
        duration:1,
        delay:2,
        stagger:0.5,
        scrollTrigger: {
            trigger: '#weather',
            start: '50vh',
            end:'100vh',
        },onStart() {
            gsap.fromTo('.lcn',{
                x:-50,
                opacity:0
            },{
                x:0,
                opacity:1,
                delay:0.2,
                ease: Power2.easeInOut,
            })
        },onComplete() {
            gsap.fromTo('.currentCard',{
                y:-30,
                opacity:0,
            },{
                y:0,
                opacity:1,
                stagger:0.1,
                onComplete() {
                    gsap.fromTo('.comingText',{
                        y:-30,
                        opacity:0,
                    },{
                        y:0,
                        opacity:1,
                        stagger:0.1,
                        onComplete() {
                            gsap.fromTo('.day',{
                                y:-30,
                                opacity:0,
                            },{
                                y:0,
                                opacity:1,
                                delay:2,
                                stagger:0.1,
                                onComplete() {
                                    gsap.fromTo('.dayTimeCard',{
                                        y:-30,
                                        opacity:0,
                                    },{
                                        y:0,
                                        opacity:1,
                                        stagger:0.1,
                                        onComplete() {
                                            gsap.fromTo('.developer',{
                                                y:-30,
                                                opacity:0,
                                            },{
                                                y:0,
                                                opacity:1,
                                                stagger:0.1,
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
        
    })
}



function init(){
    heroAnimation();
    resultAnimation();
};

window.onload = () => {
	init();
};





